import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');
const indexPath = path.join(distDir, 'index.html');
const siteUrl = 'https://azmee-store.my.id';

if (!fs.existsSync(indexPath) || !fs.existsSync(ssrEntry)) {
  console.error('[prerender] dist/index.html atau dist-ssr/entry-server.js tidak ditemukan.');
  process.exit(1);
}

const template = fs.readFileSync(indexPath, 'utf-8');
const { render, getPages } = await import(pathToFileURL(ssrEntry).href);
const pages = getPages();

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function replaceTitle(html, title) {
  return html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);
}

function replaceMeta(html, key, value) {
  const pattern = new RegExp(`<meta[^>]*(?:name|property)="${escapeRegExp(key)}"[^>]*>`);

  return html.replace(pattern, (tag) => {
    if (/content="/.test(tag)) {
      return tag.replace(/content="[^"]*"/, `content="${escapeHtml(value)}"`);
    }
    return tag.replace(/>$/, ` content="${escapeHtml(value)}" />`);
  });
}

function replaceCanonical(html, href) {
  return html.replace(
    /(<link[^>]*rel="canonical"[^>]*href=")[^"]*(")/,
    `$1${escapeHtml(href)}$2`,
  );
}

function buildHtml(page) {
  const canonical = `${siteUrl}${page.path === '/' ? '/' : page.path}`;
  let html = template;

  html = replaceTitle(html, page.title);
  html = replaceMeta(html, 'description', page.description);
  html = replaceMeta(html, 'og:title', page.title);
  html = replaceMeta(html, 'og:description', page.description);
  html = replaceMeta(html, 'og:url', canonical);
  html = replaceMeta(html, 'twitter:title', page.title);
  html = replaceMeta(html, 'twitter:description', page.description);
  html = replaceCanonical(html, canonical);

  if (page.jsonLd) {
    const jsonLd = `<script type="application/ld+json">\n${JSON.stringify(page.jsonLd, null, 2)}\n  </script>`;
    html = html.replace('</head>', `  ${jsonLd}\n</head>`);
  }

  return html;
}

const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) {
  console.error('[prerender] Placeholder <div id="root"></div> tidak ditemukan di index.html.');
  process.exit(1);
}

let totalText = 0;

for (const page of pages) {
  const appHtml = render(page.path);
  const html = buildHtml(page).replace(
    placeholder,
    `<div id="root" data-route="${page.path}">${appHtml}</div>`,
  );
  const target =
    page.path === '/'
      ? indexPath
      : path.join(distDir, page.path.replace(/^\//, '').replace(/\/$/, ''), 'index.html');

  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, html);

  totalText += appHtml.replace(/<[^>]+>/g, '').trim().length;
  console.log(
    `[prerender] ${page.path.padEnd(62)} → ${path.relative(distDir, target)} (${appHtml.length} bytes)`,
  );
}

console.log(
  `[prerender] Selesai — ${pages.length} halaman, ${totalText} bytes teks ter-render.`,
);
