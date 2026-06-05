# -*- coding: utf-8 -*-
# Reusable i18n field setter. Usage: python _applytrans.py <data.json>
# data.json = { "key.path": { "es": "value", "fr": "value", ... }, ... }
import io, re, json, sys

src = 'assets/js/i18n.js'
c = io.open(src, encoding='utf-8').read()
data = json.loads(io.open(sys.argv[1], encoding='utf-8').read())

def block_span(key):
    m = re.search(r'"' + re.escape(key) + r'"\s*:\s*\{', c)
    if not m:
        return None
    i = m.end(); depth = 1
    while depth > 0 and i < len(c):
        ch = c[i]
        if ch == '{': depth += 1
        elif ch == '}': depth -= 1
        i += 1
    return (m.start(), i)

def js_escape(v):
    return v.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n').replace('\r', '')

ok = miss = 0
report = []
for key, langs in data.items():
    sp = block_span(key)
    if not sp:
        report.append('NOKEY ' + key); miss += 1; continue
    s, e = sp
    block = c[s:e]
    newblock = block
    for L, val in langs.items():
        esc = js_escape(val)
        pat = re.compile(r'(\b' + L + r'\s*:\s*)"(?:\\.|[^"\\])*"')
        if pat.search(newblock):
            newblock = pat.sub(lambda m: m.group(1) + '"' + esc + '"', newblock, count=1)
            ok += 1
        else:
            report.append('NOFIELD %s[%s]' % (key, L)); miss += 1
    if newblock != block:
        c = c[:s] + newblock + c[e:]

io.open(src, 'w', encoding='utf-8').write(c)
print('fields set: %d, misses: %d' % (ok, miss))
for r in report[:30]:
    print('  ', r)
