import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const htmlFiles = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.git')) continue;
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(abs);
    if (entry.isFile() && entry.name.endsWith('.html')) htmlFiles.push(abs);
  }
}

walk(root);

const findings = {
  totalPages: htmlFiles.length,
  missingTitle: [],
  missingDescription: [],
  missingH1: [],
  missingLang: [],
  imagesWithoutAlt: [],
  scriptsWithoutDefer: [],
  linksWithHashOnly: []
};

const imgRegex = /<img\b[^>]*>/gi;
const srcRegex = /\ssrc=(['"])(.*?)\1/i;

for (const file of htmlFiles) {
  const rel = path.relative(root, file);
  const html = fs.readFileSync(file, 'utf8');

  if (!/<title>.*?<\/title>/is.test(html)) findings.missingTitle.push(rel);
  if (!/<meta\s+name=["']description["'][^>]*>/i.test(html)) findings.missingDescription.push(rel);
  if (!/<h1\b[^>]*>.*?<\/h1>/is.test(html)) findings.missingH1.push(rel);
  if (!/<html\b[^>]*\blang=["'][^"']+["']/i.test(html)) findings.missingLang.push(rel);

  const imgs = html.match(imgRegex) || [];
  for (const imgTag of imgs) {
    if (!/\balt=(["']).*?\1/i.test(imgTag)) {
      const src = imgTag.match(srcRegex)?.[2] || 'unknown-src';
      findings.imagesWithoutAlt.push(`${rel}: ${src}`);
    }
  }

  const scripts = html.match(/<script\b[^>]*src=[^>]*>/gi) || [];
  for (const tag of scripts) {
    if (!/\bdefer\b/i.test(tag)) findings.scriptsWithoutDefer.push(rel);
  }

  const hashLinks = html.match(/<a\b[^>]*href=["']#["'][^>]*>/gi) || [];
  if (hashLinks.length) findings.linksWithHashOnly.push(`${rel}: ${hashLinks.length}`);
}

console.log(JSON.stringify(findings, null, 2));
