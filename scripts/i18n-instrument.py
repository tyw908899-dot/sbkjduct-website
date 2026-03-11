#!/usr/bin/env python3
"""
i18n-instrument.py
Instruments all HTML files in the SBKJ website with i18n support.
"""

import os
import re

SITE_ROOT = '/home/user/sbkjduct-website'

# ──────────────────────────────────────────────
# Page ID map  (relative path from site root → data-page-id value)
# ──────────────────────────────────────────────
PAGE_ID_MAP = {
    'index.html': 'home',
    'machines.html': 'machines',
    'contact-ryan.html': 'contact-ryan',
    'contact.html': 'contact',
    'request-quote.html': 'request-quote',
    'about.html': 'about',
    'factory.html': 'factory',
    'quality.html': 'quality',
    'why-choose-sbkj.html': 'why-sbkj',
    'videos.html': 'videos',
    'duct-making-machine-australia.html': 'duct-making-australia',
    'case-studies/index.html': 'cases-index',
    'case-studies/southeast-asia-auto-duct-line.html': 'case-sea-auto',
    'case-studies/middle-east-spiral-duct-production.html': 'case-me-spiral',
    'case-studies/europe-spiral-duct-production.html': 'case-eu-spiral',
    'case-studies/australia-duct-factory-setup.html': 'case-au-factory',
    'case-studies/complete-factory-southeast-asia.html': 'case-sea-factory',
    'knowledge-center/index.html': 'kc-index',
    'knowledge-center/how-to-choose-auto-duct-line.html': 'kc-choose-auto',
    'knowledge-center/how-many-workers-auto-duct-line-saves.html': 'kc-workers-auto',
    'knowledge-center/complete-rectangular-duct-factory.html': 'kc-rect-factory',
    'knowledge-center/spiral-duct-machine-complete-set.html': 'kc-spiral-set',
    'knowledge-center/common-mistakes-buying-spiral-tubeformer.html': 'kc-spiral-mistakes',
    'knowledge-center/tdf-vs-tdc-vs-pittsburgh.html': 'kc-tdf-vs',
    'hvac-duct-machinery/index.html': 'pillar-hvac',
    'spiral-duct-machine/index.html': 'pillar-spiral',
    'auto-duct-line/index.html': 'pillar-auto',
    'duct-forming-machines/index.html': 'pillar-forming',
    'elbow-fittings-machines/index.html': 'pillar-elbow',
    'duct-machinery-australia/index.html': 'region-australia',
    'duct-machinery-europe/index.html': 'region-europe',
    'duct-machinery-middle-east/index.html': 'region-me',
    'airport-metro-duct-production/index.html': 'industry-airport',
    'cold-chain-duct-production/index.html': 'industry-coldchain',
    'commercial-hvac-duct-production/index.html': 'industry-commercial',
    'industrial-ventilation-duct-production/index.html': 'industry-industrial',
    'fabrication-shop-automation-upgrade/index.html': 'industry-fabrication',
}

# Nav link text → data-i18n key
NAV_LINK_MAP = {
    'Home': 'nav.home',
    'Machines': 'nav.machines',
    'Buying Guides': 'nav.guides',
    'Case Studies': 'nav.cases',
    'Talk to Ryan': 'nav.talk',
    'Request Quote': 'nav.quote',
}

# Footer link text → data-i18n key
FOOTER_LINK_MAP = {
    'About SBKJ': 'footer.link.about',
    'Why SBKJ?': 'footer.link.why',
    'Factory Tour': 'footer.link.factory',
    'Quality &amp; Certs': 'footer.link.quality',
    'Quality & Certs': 'footer.link.quality',
    'Talk to Ryan': 'footer.link.ryan',
    'HVAC Duct Machinery': 'footer.link.hvac',
    'Spiral Duct Machines': 'footer.link.spiral',
    'Auto Duct Lines': 'footer.link.auto',
    'Duct Forming Machines': 'footer.link.forming',
    'Elbow &amp; Fittings': 'footer.link.elbow',
    'Elbow & Fittings': 'footer.link.elbow',
    'All Machines': 'footer.link.machines',
    'Buying Guides': 'footer.link.guides',
    'Case Studies': 'footer.link.cases',
    'Videos': 'footer.link.videos',
    'Request Quote': 'footer.link.quote',
}

# Footer h3 text → data-i18n key
FOOTER_H3_MAP = {
    'Company': 'footer.col.company',
    'Machinery Categories': 'footer.col.machinery',
    'Resources': 'footer.col.resources',
    'Contact': 'footer.col.contact',
}


def get_page_id(rel_path):
    """Return the data-page-id value for a relative path."""
    # Normalise to forward slashes
    rel_path = rel_path.replace(os.sep, '/')
    if rel_path in PAGE_ID_MAP:
        return PAGE_ID_MAP[rel_path]
    # product/*.html  →  product-{slug}
    if rel_path.startswith('product/') and rel_path.endswith('.html'):
        slug = os.path.splitext(os.path.basename(rel_path))[0]
        return f'product-{slug}'
    return None


def depth_of(rel_path):
    """Return the directory depth (0 = root level file)."""
    parts = rel_path.replace(os.sep, '/').split('/')
    return len(parts) - 1  # number of directory components


def i18n_js_path(rel_path):
    d = depth_of(rel_path)
    if d == 0:
        return 'assets/js/i18n.js'
    elif d == 1:
        return '../assets/js/i18n.js'
    else:
        return '../../assets/js/i18n.js'


# ──────────────────────────────────────────────
# Helper: add data-i18n to a tag that doesn't have it yet
# ──────────────────────────────────────────────

def add_data_i18n_to_tag(tag_html, key):
    """
    Given the opening-tag HTML string (e.g. '<a href="...">'),
    insert data-i18n="key" if it's not already there.
    Returns the modified tag string, or the original if already present.
    """
    if 'data-i18n' in tag_html:
        return tag_html, False
    # Insert before the closing >
    new_tag = re.sub(r'>$', f' data-i18n="{key}">', tag_html)
    return new_tag, True


# ──────────────────────────────────────────────
# Step 1 – Instrument nav links
# ──────────────────────────────────────────────

def instrument_nav_links(content):
    """
    Find <nav class="site-nav" …> … </nav> blocks and add data-i18n
    to <a> tags whose visible text matches the map.
    Returns (new_content, count_added).
    """
    count = 0

    def process_nav(m):
        nonlocal count
        nav_block = m.group(0)

        for text, key in NAV_LINK_MAP.items():
            # Match an <a …> tag that does NOT already have data-i18n,
            # followed by the exact text content (trimmed).
            # We allow optional whitespace around the text.
            pattern = r'(<a\b(?:(?!data-i18n)[^>])*)>([ \t\r\n]*)' + re.escape(text) + r'([ \t\r\n]*</a>)'
            def replacer(mo, k=key):
                nonlocal count
                opening = mo.group(1)
                ws1 = mo.group(2)
                ws2 = mo.group(3)
                if 'data-i18n' in opening:
                    return mo.group(0)
                count += 1
                return f'{opening} data-i18n="{k}">{ws1}{text}{ws2}'
            nav_block = re.sub(pattern, replacer, nav_block)

        return nav_block

    # Match the entire site-nav block
    content = re.sub(
        r'<nav\b[^>]*class="[^"]*site-nav[^"]*"[^>]*>.*?</nav>',
        process_nav,
        content,
        flags=re.DOTALL
    )
    return content, count


# ──────────────────────────────────────────────
# Step 2 – Instrument footer links
# ──────────────────────────────────────────────

def instrument_footer_links(content):
    """Add data-i18n to footer <a> tags matching the map."""
    count = 0

    def process_footer(m):
        nonlocal count
        footer_block = m.group(0)

        for text, key in FOOTER_LINK_MAP.items():
            escaped = re.escape(text)
            pattern = r'(<a\b(?:(?!data-i18n)[^>])*)>([ \t\r\n]*)' + escaped + r'([ \t\r\n]*</a>)'
            def replacer(mo, k=key, t=text):
                nonlocal count
                opening = mo.group(1)
                ws1 = mo.group(2)
                ws2 = mo.group(3)
                if 'data-i18n' in opening:
                    return mo.group(0)
                count += 1
                return f'{opening} data-i18n="{k}">{ws1}{t}{ws2}'
            footer_block = re.sub(pattern, replacer, footer_block)

        return footer_block

    content = re.sub(
        r'<footer\b[^>]*>.*?</footer>',
        process_footer,
        content,
        flags=re.DOTALL
    )
    return content, count


# ──────────────────────────────────────────────
# Step 3 – Instrument footer h3 headings
# ──────────────────────────────────────────────

def instrument_footer_h3(content):
    """Add data-i18n to <h3> tags inside footer matching the map."""
    count = 0

    def process_footer(m):
        nonlocal count
        footer_block = m.group(0)

        for text, key in FOOTER_H3_MAP.items():
            escaped = re.escape(text)
            pattern = r'(<h3\b(?:(?!data-i18n)[^>])*)>([ \t\r\n]*)' + escaped + r'([ \t\r\n]*</h3>)'
            def replacer(mo, k=key, t=text):
                nonlocal count
                opening = mo.group(1)
                ws1 = mo.group(2)
                ws2 = mo.group(3)
                if 'data-i18n' in opening:
                    return mo.group(0)
                count += 1
                return f'{opening} data-i18n="{k}">{ws1}{t}{ws2}'
            footer_block = re.sub(pattern, replacer, footer_block)

        return footer_block

    content = re.sub(
        r'<footer\b[^>]*>.*?</footer>',
        process_footer,
        content,
        flags=re.DOTALL
    )
    return content, count


# ──────────────────────────────────────────────
# Step 4 – Instrument footer description <p> and meta <p>
# ──────────────────────────────────────────────

def instrument_footer_desc(content):
    """
    Add data-i18n="footer.desc" to footer-text <p> and
    data-i18n="footer.meta" to footer-meta <p> if not already present.
    """
    count = 0

    def add_if_missing(m):
        nonlocal count
        tag = m.group(1)
        rest = m.group(2)
        if 'data-i18n' in tag:
            return m.group(0)
        count += 1
        cls_match = re.search(r'class="([^"]*)"', tag)
        cls = cls_match.group(1) if cls_match else ''
        if 'footer-text' in cls:
            key = 'footer.desc'
        elif 'footer-meta' in cls:
            key = 'footer.meta'
        else:
            return m.group(0)
        return f'{tag} data-i18n="{key}">{rest}'

    def process_footer(m):
        nonlocal count
        footer_block = m.group(0)
        # Match <p class="footer-text ..."> and <p class="footer-meta ...">
        pattern = r'(<p\b[^>]*class="[^"]*footer-(?:text|meta)[^"]*"[^>]*)>(.*?</p>)'
        footer_block = re.sub(pattern, add_if_missing, footer_block, flags=re.DOTALL)
        return footer_block

    content = re.sub(
        r'<footer\b[^>]*>.*?</footer>',
        process_footer,
        content,
        flags=re.DOTALL
    )
    return content, count


# ──────────────────────────────────────────────
# Step 5 – Instrument copyright span/p
# ──────────────────────────────────────────────

def instrument_footer_copy(content):
    """Add data-i18n="footer.copy" to spans/p containing © or Copyright in footer."""
    count = 0

    def process_footer(m):
        nonlocal count
        footer_block = m.group(0)

        # Match <span ...> or <p ...> containing © or Copyright, without data-i18n
        def add_copy(mo):
            nonlocal count
            tag = mo.group(1)
            inner = mo.group(2)
            close = mo.group(3)
            if 'data-i18n' in tag:
                return mo.group(0)
            count += 1
            return f'{tag} data-i18n="footer.copy">{inner}{close}'

        pattern = r'(<(?:span|p)\b(?:(?!data-i18n)[^>])*)>((?:(?!</(?:span|p)>).)*(?:©|Copyright)(?:(?!</(?:span|p)>).)*)(</(?:span|p)>)'
        footer_block = re.sub(pattern, add_copy, footer_block, flags=re.DOTALL)
        return footer_block

    content = re.sub(
        r'<footer\b[^>]*>.*?</footer>',
        process_footer,
        content,
        flags=re.DOTALL
    )
    return content, count


# ──────────────────────────────────────────────
# Step 6 – Add i18n.js script tag
# ──────────────────────────────────────────────

def instrument_i18n_script(content, rel_path):
    """Add <script src="…/i18n.js"> before </body> if not already present."""
    if re.search(r'<script\b[^>]*\bi18n\.js\b', content):
        return content, False
    js_path = i18n_js_path(rel_path)
    script_tag = f'  <script src="{js_path}"></script>\n'
    content = re.sub(r'([ \t]*</body>)', script_tag + r'\1', content, count=1)
    return content, True


# ──────────────────────────────────────────────
# Step 7 – Add data-page-id to <html>
# ──────────────────────────────────────────────

def instrument_page_id(content, rel_path):
    """Add data-page-id="…" to the <html> element if not already present."""
    # If already has data-page-id, skip
    if re.search(r'<html\b[^>]*\bdata-page-id\b', content):
        return content, False

    page_id = get_page_id(rel_path)
    if page_id is None:
        return content, False

    def add_page_id(m):
        tag = m.group(0)
        if 'data-page-id' in tag:
            return tag
        return re.sub(r'>$', f' data-page-id="{page_id}">', tag)

    new_content = re.sub(r'<html\b[^>]*>', add_page_id, content, count=1)
    changed = new_content != content
    return new_content, changed


# ──────────────────────────────────────────────
# Main
# ──────────────────────────────────────────────

def main():
    files_modified = 0
    total_i18n_added = 0
    total_script_added = 0
    total_page_id_added = 0
    skipped_already_done = 0
    errors = []

    html_files = []
    for dirpath, dirnames, filenames in os.walk(SITE_ROOT):
        # Skip hidden dirs and node_modules etc.
        dirnames[:] = [d for d in dirnames if not d.startswith('.')]
        for fn in filenames:
            if not fn.endswith('.html'):
                continue
            if fn == '_template.html':
                continue
            full = os.path.join(dirpath, fn)
            rel = os.path.relpath(full, SITE_ROOT)
            html_files.append((full, rel))

    html_files.sort(key=lambda x: x[1])

    for full_path, rel_path in html_files:
        try:
            with open(full_path, 'r', encoding='utf-8') as f:
                original = f.read()
        except Exception as e:
            errors.append(f'READ ERROR {rel_path}: {e}')
            continue

        # Skip if already instrumented (data-page-id already on <html>)
        if re.search(r'<html\b[^>]*\bdata-page-id\b', original):
            skipped_already_done += 1
            continue

        content = original
        file_i18n = 0

        content, n = instrument_nav_links(content)
        file_i18n += n

        content, n = instrument_footer_links(content)
        file_i18n += n

        content, n = instrument_footer_h3(content)
        file_i18n += n

        content, n = instrument_footer_desc(content)
        file_i18n += n

        content, n = instrument_footer_copy(content)
        file_i18n += n

        content, script_added = instrument_i18n_script(content, rel_path)

        content, page_id_added = instrument_page_id(content, rel_path)

        if content != original:
            try:
                with open(full_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                files_modified += 1
                total_i18n_added += file_i18n
                if script_added:
                    total_script_added += 1
                if page_id_added:
                    total_page_id_added += 1
                print(f'  MODIFIED  {rel_path}  (+{file_i18n} attrs'
                      + (', +script' if script_added else '')
                      + (f', page-id={get_page_id(rel_path)}' if page_id_added else '')
                      + ')')
            except Exception as e:
                errors.append(f'WRITE ERROR {rel_path}: {e}')
        else:
            print(f'  unchanged {rel_path}')

    print()
    print('═' * 60)
    print('SUMMARY')
    print('═' * 60)
    print(f'  Files scanned:           {len(html_files)}')
    print(f'  Files already done:      {skipped_already_done}')
    print(f'  Files modified:          {files_modified}')
    print(f'  data-i18n attrs added:   {total_i18n_added}')
    print(f'  i18n.js scripts added:   {total_script_added}')
    print(f'  data-page-id attrs added:{total_page_id_added}')
    if errors:
        print(f'  ERRORS ({len(errors)}):')
        for e in errors:
            print(f'    {e}')
    print('═' * 60)


if __name__ == '__main__':
    main()
