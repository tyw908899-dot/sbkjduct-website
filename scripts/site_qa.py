#!/usr/bin/env python3
"""Lightweight QA checks for key website pages."""
from __future__ import annotations

import re
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MAJOR_PAGES = [
    "index.html",
    "machines.html",
    "videos.html",
    "about.html",
    "contact.html",
    "why-choose-sbkj.html",
    "factory.html",
    "quality.html",
    "request-quote.html",
    "duct-making-machine-australia.html",
]
ENGLISH_ONLY_PAGES = {"duct-making-machine-australia.html"}


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.title = ""
        self.in_title = False
        self.meta_description = ""
        self.canonical = ""
        self.links: list[str] = []
        self.images: list[dict[str, str]] = []
        self.visible_text_parts: list[str] = []
        self.in_script = False
        self.in_style = False

    def handle_starttag(self, tag: str, attrs) -> None:
        attrs_dict = dict(attrs)
        if tag == "title":
            self.in_title = True
        elif tag == "meta" and attrs_dict.get("name", "").lower() == "description":
            self.meta_description = attrs_dict.get("content", "").strip()
        elif tag == "link" and attrs_dict.get("rel", "").lower() == "canonical":
            self.canonical = attrs_dict.get("href", "").strip()
        elif tag == "a":
            href = attrs_dict.get("href", "").strip()
            if href:
                self.links.append(href)
        elif tag == "img":
            self.images.append({"src": attrs_dict.get("src", ""), "alt": attrs_dict.get("alt", "")})
        elif tag == "script":
            self.in_script = True
        elif tag == "style":
            self.in_style = True

    def handle_endtag(self, tag: str) -> None:
        if tag == "title":
            self.in_title = False
        elif tag == "script":
            self.in_script = False
        elif tag == "style":
            self.in_style = False

    def handle_data(self, data: str) -> None:
        if self.in_title:
            self.title += data.strip()
        if not self.in_script and not self.in_style:
            text = data.strip()
            if text:
                self.visible_text_parts.append(text)


def parse_page(page_path: Path) -> PageParser:
    parser = PageParser()
    parser.feed(page_path.read_text(encoding="utf-8"))
    return parser


def resolve_internal_link(source: str, href: str) -> str | None:
    if href.startswith(("http://", "https://", "mailto:", "tel:", "javascript:", "#")):
        return None

    pure = href.split("#", 1)[0].split("?", 1)[0]
    if not pure:
        return None

    if pure.startswith("/"):
        target = pure[1:] or "index.html"
    else:
        target = str((Path(source).parent / pure).as_posix())

    return str(Path(target))


def run_checks() -> dict:
    parsed = {}
    for page in MAJOR_PAGES:
        parsed[page] = parse_page(ROOT / page)

    all_files = {
        str(path.relative_to(ROOT).as_posix())
        for path in ROOT.rglob("*")
        if path.is_file()
    }

    broken_links = []
    for page, data in parsed.items():
        for href in data.links:
            resolved = resolve_internal_link(page, href)
            if not resolved:
                continue
            if resolved not in all_files:
                broken_links.append((page, href, resolved))

    titles = {}
    descriptions = {}
    missing_canonical = []
    for page, data in parsed.items():
        titles.setdefault(data.title, []).append(page)
        descriptions.setdefault(data.meta_description, []).append(page)
        if not data.canonical:
            missing_canonical.append(page)

    duplicate_titles = {k: v for k, v in titles.items() if k and len(v) > 1}
    duplicate_descriptions = {k: v for k, v in descriptions.items() if k and len(v) > 1}

    missing_alt = []
    for page, data in parsed.items():
        for image in data.images:
            if image["src"] and not image["alt"].strip():
                missing_alt.append((page, image["src"]))

    mixed_language_flags = []
    for page, data in parsed.items():
        text = " ".join(data.visible_text_parts)
        ascii_words = len(re.findall(r"[A-Za-z]{3,}", text))
        cjk_chars = len(re.findall(r"[\u4e00-\u9fff]", text))
        if page in ENGLISH_ONLY_PAGES and cjk_chars > 20 and ascii_words > 20:
            mixed_language_flags.append((page, "Contains both heavy English and Chinese text blocks."))

    return {
        "broken_links": broken_links,
        "duplicate_titles": duplicate_titles,
        "duplicate_descriptions": duplicate_descriptions,
        "missing_canonical": missing_canonical,
        "missing_alt": missing_alt,
        "mixed_language_flags": mixed_language_flags,
    }


def write_reports(results: dict) -> None:
    docs = ROOT / "docs"
    docs.mkdir(exist_ok=True)

    (docs / "link-check.md").write_text(
        "# Link Check\n\n"
        + ("No broken internal links found on major pages.\n" if not results["broken_links"] else "")
        + "\n".join(
            f"- `{page}` has broken link `{href}` (resolved as `{resolved}`)"
            for page, href, resolved in results["broken_links"]
        )
        + "\n",
        encoding="utf-8",
    )

    meta_lines = ["# Meta Check", ""]
    if results["duplicate_titles"]:
        meta_lines.append("## Duplicate Titles")
        for title, pages in results["duplicate_titles"].items():
            meta_lines.append(f"- `{title}` -> {', '.join(f'`{p}`' for p in pages)}")
    else:
        meta_lines.append("## Duplicate Titles")
        meta_lines.append("None found on major pages.")

    meta_lines.append("")
    if results["duplicate_descriptions"]:
        meta_lines.append("## Duplicate Meta Descriptions")
        for desc, pages in results["duplicate_descriptions"].items():
            meta_lines.append(f"- `{desc}` -> {', '.join(f'`{p}`' for p in pages)}")
    else:
        meta_lines.append("## Duplicate Meta Descriptions")
        meta_lines.append("None found on major pages.")

    meta_lines.append("")
    if results["missing_canonical"]:
        meta_lines.append("## Missing Canonical Tags")
        meta_lines.extend(f"- `{page}`" for page in results["missing_canonical"])
    else:
        meta_lines.append("## Missing Canonical Tags")
        meta_lines.append("None found on major pages.")

    (docs / "meta-check.md").write_text("\n".join(meta_lines) + "\n", encoding="utf-8")

    i18n_lines = ["# i18n Check", ""]
    if results["mixed_language_flags"]:
        i18n_lines.append("## Obvious Mixed-language Flags")
        for page, issue in results["mixed_language_flags"]:
            i18n_lines.append(f"- `{page}`: {issue}")
    else:
        i18n_lines.append("No obvious mixed-language issues found on major pages.")
    (docs / "i18n-check.md").write_text("\n".join(i18n_lines) + "\n", encoding="utf-8")

    asset_lines = ["# Asset Check", ""]
    if results["missing_alt"]:
        asset_lines.append("## Missing alt Attributes")
        for page, src in results["missing_alt"]:
            asset_lines.append(f"- `{page}` image `{src}` is missing alt text")
    else:
        asset_lines.append("No missing alt attributes found on major page images.")
    (docs / "asset-check.md").write_text("\n".join(asset_lines) + "\n", encoding="utf-8")


if __name__ == "__main__":
    output = run_checks()
    write_reports(output)
    print("QA reports written to docs/.")
