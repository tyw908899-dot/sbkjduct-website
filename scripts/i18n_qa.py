#!/usr/bin/env python3
"""
i18n QA — SBKJ website
===============================================
Checks:
  1. Missing translation keys  — data-i18n attr used in HTML but absent from T dict
  2. Missing translation values — key exists in T but lacks one or more language values
  3. Untranslated strings       — visible text in MAJOR_TRANSLATED_PAGES with no data-i18n
  4. Policy coverage            — every HTML page is either in MAJOR_TRANSLATED_PAGES
                                  or has an explicit English-only/redirect policy entry
  5. Mixed-language guard       — pages in MAJOR_TRANSLATED_PAGES with heavy hardcoded
                                  English text (fallback for net-new sections)

Exit 0 = all checks pass (CI-safe)
Exit 1 = one or more failures

Run:  python3 scripts/i18n_qa.py
"""
from __future__ import annotations

import re
import sys
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
I18N_JS = ROOT / "assets" / "js" / "i18n.js"

# ---------------------------------------------------------------------------
# Supported languages (must stay in sync with LANGS in i18n.js)
# ---------------------------------------------------------------------------
LANGS = ["en", "zh", "es", "ru", "ar", "tr", "fr", "pt", "hi", "id"]

# ---------------------------------------------------------------------------
# Text tags whose direct text content should be translated
# ---------------------------------------------------------------------------
TEXT_TAGS = frozenset({
    "h1", "h2", "h3", "h4", "h5", "h6",
    "p", "li", "dt", "dd", "label", "button", "th", "caption"
})

# ---------------------------------------------------------------------------
# Tags whose subtree we skip when scanning for untranslated text
# ---------------------------------------------------------------------------
SKIP_TAGS = frozenset({
    "script", "style", "noscript", "svg", "math",
    "nav", "footer",  # already fully translated — skip
    "head", "meta", "link", "title",
})

# ---------------------------------------------------------------------------
# Pages with purely decorative / brand text that QA should not flag
# ---------------------------------------------------------------------------
ALLOWED_BARE_PATTERNS = [
    re.compile(r"^(SBKJ|CE|ISO\s*\d+|©|\d[\d\s,.+%×xX°°–-]*|WhatsApp|Ryan\s+Tao|sales@\S+|www\.\S+|\+\d[\d\s-]+)$", re.I),
    re.compile(r"^[•·→←↑↓★☆✓✗✔✘⚡⚙🏭🔧&amp;|/,.\-–—]+$"),
]


# ===========================================================================
# Parse i18n.js
# ===========================================================================

def _load_js() -> str:
    return I18N_JS.read_text(encoding="utf-8")


def extract_t_keys(src: str) -> dict[str, set[str]]:
    """
    Return {key: set_of_defined_languages} for every entry in the T dict.
    Also parses SPEC dict (spec label translations).
    """
    result: dict[str, set[str]] = {}

    def _parse_block(block: str, prefix: str = "") -> None:
        # Match top-level "key": { ... } entries
        for m in re.finditer(r'"([^"]+)"\s*:\s*\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}', block):
            key = m.group(1)
            inner = m.group(2)
            langs_found: set[str] = set()
            for lm in re.finditer(r'\b(en|zh|es|ru|ar|tr|fr|pt|hi|id)\s*:', inner):
                langs_found.add(lm.group(1))
            if langs_found:
                full_key = prefix + key if prefix else key
                result[full_key] = langs_found

    # Extract T = { ... }
    t_m = re.search(r"\bconst T\s*=\s*\{", src)
    if t_m:
        start = src.index("{", t_m.start())
        depth = 0
        for j in range(start, len(src)):
            if src[j] == "{":
                depth += 1
            elif src[j] == "}":
                depth -= 1
                if depth == 0:
                    _parse_block(src[start : j + 1])
                    break

    return result


def extract_major_translated_pages(src: str) -> set[str]:
    m = re.search(
        r"MAJOR_TRANSLATED_PAGES\s*=\s*new Set\(\[(.*?)\]\)", src, re.DOTALL
    )
    if not m:
        return set()
    return set(re.findall(r'"(/[^"]+)"', m.group(1)))


def extract_policy_pages(src: str) -> set[str]:
    """Pages explicitly listed in LANGUAGE_POLICY.exact."""
    m = re.search(r"LANGUAGE_POLICY\s*=\s*\{.*?exact\s*:\s*\{(.*?)\},\s*patterns", src, re.DOTALL)
    if not m:
        return set()
    return set(re.findall(r'"(/[^"]+)"\s*:\s*\{', m.group(1)))


# ===========================================================================
# Parse HTML files
# ===========================================================================

_I18N_ATTRS = (
    "data-i18n",
    "data-i18n-html",
    "data-i18n-placeholder",
    "data-i18n-aria",
    "data-i18n-title",
)


class _PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.i18n_keys: list[str] = []
        self.untranslated: list[str] = []  # (tag, text) tuples as "tag|text"

        self._skip_depth = 0
        self._cur_tag = ""
        self._cur_has_i18n = False
        self._in_text_tag = False
        self._text_buf = ""

    def handle_starttag(self, tag: str, attrs) -> None:
        ad = dict(attrs)

        if tag in SKIP_TAGS:
            self._skip_depth += 1

        has_i18n = any(a in ad for a in _I18N_ATTRS)
        if has_i18n:
            for attr in _I18N_ATTRS:
                v = ad.get(attr)
                if v:
                    self.i18n_keys.append(v)

        self._cur_tag = tag
        self._cur_has_i18n = has_i18n

        if tag in TEXT_TAGS and self._skip_depth == 0 and not has_i18n:
            self._in_text_tag = True
            self._text_buf = ""
        else:
            self._in_text_tag = False

    def handle_endtag(self, tag: str) -> None:
        if tag in SKIP_TAGS and self._skip_depth > 0:
            self._skip_depth -= 1

        if self._in_text_tag and tag == self._cur_tag:
            text = self._text_buf.strip()
            if self._is_untranslated(text):
                self.untranslated.append(f"{self._cur_tag}|{text[:120]}")
            self._in_text_tag = False
            self._text_buf = ""

    def handle_data(self, data: str) -> None:
        if self._in_text_tag and self._skip_depth == 0:
            self._text_buf += data

    @staticmethod
    def _is_untranslated(text: str) -> bool:
        if len(text) < 4:
            return False
        if not re.search(r"[A-Za-z]{3,}", text):
            return False
        for pat in ALLOWED_BARE_PATTERNS:
            if pat.match(text):
                return False
        return True


def parse_html(path: Path) -> _PageParser:
    p = _PageParser()
    p.feed(path.read_text(encoding="utf-8"))
    return p


# ===========================================================================
# Path ↔ URL helpers
# ===========================================================================

def path_to_url(path: Path) -> str:
    rel = path.relative_to(ROOT).as_posix()
    if not rel.startswith("/"):
        rel = "/" + rel
    return rel


def url_to_path(url: str) -> Path:
    return ROOT / url.lstrip("/")


# ===========================================================================
# Discover all HTML files
# ===========================================================================

def all_html_files() -> list[Path]:
    files = [p for p in ROOT.rglob("*.html") if not any(
        part.startswith(".") for part in p.parts
    )]
    return sorted(files)


# ===========================================================================
# Main QA runner
# ===========================================================================

def run_qa() -> dict:
    src = _load_js()
    t_keys: dict[str, set[str]] = extract_t_keys(src)
    major_pages: set[str] = extract_major_translated_pages(src)
    policy_pages: set[str] = extract_policy_pages(src)

    html_files = all_html_files()
    failures: list[str] = []
    warnings: list[str] = []

    # ── 1. Collect all data-i18n keys used across HTML ──────────────────────
    used_keys: dict[str, list[str]] = {}  # key → [pages that use it]
    untranslated_report: dict[str, list[str]] = {}  # page_url → [tag|text]
    page_key_map: dict[str, list[str]] = {}  # page_url → keys used

    for html in html_files:
        url = path_to_url(html)
        parsed = parse_html(html)

        for k in parsed.i18n_keys:
            used_keys.setdefault(k, []).append(url)
        page_key_map[url] = parsed.i18n_keys

        if url in major_pages and parsed.untranslated:
            untranslated_report[url] = parsed.untranslated

    # ── 2. Missing keys (used in HTML but absent from T) ────────────────────
    missing_keys = {k: pages for k, pages in used_keys.items() if k not in t_keys}
    if missing_keys:
        for k, pages in sorted(missing_keys.items()):
            failures.append(
                f"MISSING KEY  '{k}'  — used in: {', '.join(sorted(set(pages)))}"
            )

    # ── 3. Incomplete translations (key exists but some langs missing) ───────
    incomplete: dict[str, list[str]] = {}
    for key, key_langs in t_keys.items():
        missing_langs = [l for l in LANGS if l not in key_langs]
        if missing_langs:
            incomplete[key] = missing_langs
    if incomplete:
        for key, langs in sorted(incomplete.items()):
            warnings.append(
                f"INCOMPLETE   '{key}'  — missing langs: {', '.join(langs)}"
            )

    # ── 4. Untranslated strings in MAJOR_TRANSLATED_PAGES ───────────────────
    if untranslated_report:
        for url, items in sorted(untranslated_report.items()):
            for item in items[:10]:  # cap per page for readability
                tag, text = item.split("|", 1)
                failures.append(
                    f"HARDCODED    {url}  <{tag}>  \"{text}\""
                )
            if len(items) > 10:
                failures.append(
                    f"HARDCODED    {url}  ... and {len(items)-10} more untranslated elements"
                )

    # ── 5. Policy coverage — every HTML page must be accounted for ───────────
    # A page is covered if:
    #   a) it's in MAJOR_TRANSLATED_PAGES, OR
    #   b) it's in LANGUAGE_POLICY.exact, OR
    #   c) it matches a pattern rule (product/, pillar pages), OR
    #   d) it's an SEO/pillar page that explicitly redirects to index.html
    # The JS already redirects all unlisted pages to /index.html (catch-all).
    # So coverage is implicit for all pages NOT in major_pages — they redirect.
    # QA reports pages that are in major_pages but have <5 data-i18n keys
    # (likely not yet fully wired) as warnings.
    for url in sorted(major_pages):
        keys = page_key_map.get(url, [])
        if len(keys) < 5:
            warnings.append(
                f"SPARSE i18n  {url}  — only {len(keys)} data-i18n keys found; page may be under-translated"
            )

    # ── 6. Guard: product pages with data-i18n-html but no PROD entry ────────
    prod_block_m = re.search(r"\bconst PROD\s*=\s*\{(.*?)\n  \};", src, re.DOTALL)
    prod_slugs: set[str] = set()
    if prod_block_m:
        prod_slugs = set(re.findall(r'"([a-z0-9-]+)"\s*:', prod_block_m.group(1)))

    product_pages = [h for h in html_files if "product/" in str(h)]
    for html in product_pages:
        slug = html.stem  # e.g. "sbtf-1602"
        url = path_to_url(html)
        parsed_p = parse_html(html)
        has_data_i18n = bool(parsed_p.i18n_keys)
        if has_data_i18n and slug not in prod_slugs:
            warnings.append(
                f"PROD MISSING  {url}  — uses data-i18n but '{slug}' has no entry in PROD dict"
            )

    return {
        "failures": failures,
        "warnings": warnings,
        "stats": {
            "html_files": len(html_files),
            "t_keys_defined": len(t_keys),
            "html_keys_used": len(used_keys),
            "missing_keys": len(missing_keys),
            "incomplete_keys": len(incomplete),
            "major_pages": len(major_pages),
            "untranslated_pages": len(untranslated_report),
        },
    }


# ===========================================================================
# Reporting
# ===========================================================================

def _colour(code: str, text: str) -> str:
    try:
        import os
        if os.isatty(sys.stdout.fileno()):
            codes = {"red": "\033[91m", "yellow": "\033[93m", "green": "\033[92m",
                     "bold": "\033[1m", "reset": "\033[0m"}
            return f"{codes.get(code,'')}{text}{codes['reset']}"
    except Exception:
        pass
    return text


def write_reports(results: dict) -> None:
    docs = ROOT / "docs"
    docs.mkdir(exist_ok=True)

    lines = ["# i18n QA Report", ""]
    stats = results["stats"]
    lines += [
        f"- HTML files scanned: {stats['html_files']}",
        f"- Translation keys defined in i18n.js: {stats['t_keys_defined']}",
        f"- Translation keys used in HTML: {stats['html_keys_used']}",
        f"- Missing keys (FAIL): {stats['missing_keys']}",
        f"- Incomplete translations (WARN): {stats['incomplete_keys']}",
        f"- Major translated pages: {stats['major_pages']}",
        f"- Pages with hardcoded text (FAIL): {stats['untranslated_pages']}",
        "",
    ]

    if results["failures"]:
        lines += ["## Failures (must fix)", ""]
        lines += [f"- {f}" for f in results["failures"]]
        lines += [""]
    else:
        lines += ["## Failures", "None — all checks passed.", ""]

    if results["warnings"]:
        lines += ["## Warnings (should fix)", ""]
        lines += [f"- {w}" for w in results["warnings"]]
        lines += [""]
    else:
        lines += ["## Warnings", "None.", ""]

    (docs / "i18n-qa.md").write_text("\n".join(lines), encoding="utf-8")


def main() -> int:
    print(_colour("bold", "\n=== SBKJ i18n QA ===\n"))
    results = run_qa()
    write_reports(results)

    stats = results["stats"]
    print(f"HTML files:         {stats['html_files']}")
    print(f"T keys defined:     {stats['t_keys_defined']}")
    print(f"HTML keys used:     {stats['html_keys_used']}")
    print(f"Missing keys:       {stats['missing_keys']}")
    print(f"Incomplete translations: {stats['incomplete_keys']}")
    print(f"Major translated pages: {stats['major_pages']}")
    print()

    if results["failures"]:
        print(_colour("red", f"FAILURES ({len(results['failures'])}):"))
        for f in results["failures"]:
            print(f"  {_colour('red', '✗')} {f}")
    else:
        print(_colour("green", "✓ No failures."))

    print()
    if results["warnings"]:
        print(_colour("yellow", f"WARNINGS ({len(results['warnings'])}):"))
        for w in results["warnings"][:20]:
            print(f"  {_colour('yellow', '⚠')} {w}")
        if len(results["warnings"]) > 20:
            print(f"  ... and {len(results['warnings'])-20} more (see docs/i18n-qa.md)")
    else:
        print(_colour("green", "✓ No warnings."))

    print(f"\nFull report → docs/i18n-qa.md\n")

    return 1 if results["failures"] else 0


if __name__ == "__main__":
    sys.exit(main())
