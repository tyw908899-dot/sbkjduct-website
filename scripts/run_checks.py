from pathlib import Path
from html.parser import HTMLParser
import re

ROOT = Path(__file__).resolve().parents[1]
html_files = sorted([p for p in ROOT.rglob('*.html') if '.git' not in p.parts])

class Parser(HTMLParser):
    def __init__(self):
        super().__init__(); self.links=[]; self.imgs=[]; self.ids=[]; self.alts=[]; self.lang=''
    def handle_starttag(self, tag, attrs):
        d=dict(attrs)
        if tag=='html': self.lang=d.get('lang','')
        if 'id' in d: self.ids.append(d['id'])
        if tag=='a' and 'href' in d: self.links.append(d['href'])
        if tag=='img':
            self.imgs.append(d.get('src',''))
            self.alts.append((d.get('src',''), bool(d.get('alt','').strip())))

# B1 link checker
broken=[]
for f in html_files:
    p=Parser(); p.feed(f.read_text(encoding='utf-8',errors='ignore'))
    for u in p.links+p.imgs:
        if not u or u.startswith(('http://','https://','mailto:','tel:','javascript:','#')): continue
        target=(f.parent/u.split('#')[0].split('?')[0]).resolve()
        if not Path(target).exists(): broken.append((f.relative_to(ROOT),u))

(ROOT/'docs/link-check.md').write_text('# Link Check\n\n' + ('No broken internal links found.\n' if not broken else '\n'.join(f'- {f}: `{u}`' for f,u in broken)))

# B2 html checks
dup=[]; missing_alt=[]; missing_meta=[]
for f in html_files:
    t=f.read_text(encoding='utf-8',errors='ignore')
    p=Parser(); p.feed(t)
    seen=set()
    for i in p.ids:
        if i in seen: dup.append((f.relative_to(ROOT),i))
        seen.add(i)
    for src,ok in p.alts:
        if not ok: missing_alt.append((f.relative_to(ROOT),src))
    for n,pat in [('title',r'<title>.+?</title>'),('description',r'<meta\s+name="description"'),('canonical',r'rel="canonical"')]:
        if not re.search(pat,t,re.I|re.S): missing_meta.append((f.relative_to(ROOT),n))

html_out=['# HTML Check','']
html_out.append('## Duplicate IDs')
html_out += (['None found.'] if not dup else [f'- {f}: `{i}`' for f,i in dup])
html_out.append('\n## Missing alt')
html_out += (['None found.'] if not missing_alt else [f'- {f}: `{s}`' for f,s in missing_alt])
html_out.append('\n## Missing basic metadata')
html_out += (['None found.'] if not missing_meta else [f'- {f}: missing {n}' for f,n in missing_meta])
(ROOT/'docs/html-check.md').write_text('\n'.join(html_out))

# B3 i18n heuristic
english_tokens={'the','and','with','for','machine','request','quote','contact','about','home'}
risks=[]
for f in html_files:
    t=f.read_text(encoding='utf-8',errors='ignore')
    if 'assets/js/i18n.js' in t:
        if 'data-i18n' not in t:
            risks.append((f.relative_to(ROOT),'No translatable markers'))

i18n=['# i18n Check','', 'Language switcher is intentionally limited to English to avoid mixed-language partial translations.', '', '## Heuristic risks']
i18n += ['None detected in current mode.'] if not risks else [f'- {f}: {r}' for f,r in risks]
(ROOT/'docs/i18n-check.md').write_text('\n'.join(i18n))

# B4 css heuristic duplicate selectors
css=(ROOT/'assets/css/styles.css').read_text(encoding='utf-8',errors='ignore')
selectors=re.findall(r'(^|\n)([^@\n][^{]+)\{',css)
count={}
for _,s in selectors:
    sel=' '.join(s.strip().split())
    count[sel]=count.get(sel,0)+1
multi=[(s,c) for s,c in count.items() if c>1 and len(s)<80]
css_out=['# CSS Check','',f'Total selectors: {len(count)}','', '## Potential duplicate selectors (heuristic)']
css_out += ['None.'] if not multi else [f'- `{s}` appears {c} times' for s,c in sorted(multi,key=lambda x:-x[1])[:20]]
(ROOT/'docs/css-check.md').write_text('\n'.join(css_out))

# B5 js scan
js=(ROOT/'assets/js/main.js').read_text(encoding='utf-8',errors='ignore')
issues=[]
for pat,desc in [(r'console\.log\(', 'Debug console.log present'),(r'parseInt\(el\.dataset\.count, 10\);\n\s*if \(Number\.isNaN\(target\)', 'Counter NaN guard present')]:
    if 'Counter NaN guard present' in desc:
        if not re.search(pat,js): issues.append(desc)
    else:
        if re.search(pat,js): issues.append(desc)
(ROOT/'docs/js-check.md').write_text('# JS Check\n\n' + ('No high-risk patterns found; counter guard verified.\n' if not issues else '\n'.join(f'- {i}' for i in issues)))
print('done')
