import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://sbkjduct.com';
const root = process.cwd();
const htmlPages = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(abs);
    if (entry.isFile() && entry.name.endsWith('.html')) {
      const rel = path.relative(root, abs).replace(/\\/g, '/');
      if (!rel.includes('/_template.html')) htmlPages.push(rel);
    }
  }
}

walk(root);
htmlPages.sort();

const today = new Date().toISOString().slice(0, 10);
const urlset = htmlPages.map((page) => {
  const loc = page === 'index.html' ? `${SITE}/` : `${SITE}/${page}`;
  const priority = page === 'index.html' ? '1.0' : page.startsWith('product/') ? '0.8' : '0.7';
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlset}\n</urlset>\n`;
fs.writeFileSync(path.join(root, 'sitemap.xml'), sitemap, 'utf8');

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`;
fs.writeFileSync(path.join(root, 'robots.txt'), robots, 'utf8');

console.log(`Generated sitemap.xml with ${htmlPages.length} URLs and robots.txt`);
