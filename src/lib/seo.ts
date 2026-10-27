import type { Product } from '@/data/content';

export const SITE_URL = 'https://azmee-store.my.id';
export const SITE_NAME = 'Azmee Store';

export type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export const homePageMeta: PageMeta = {
  title: 'Azmee Store — Fashion Muslim Pria & Anak',
  description:
    'Azmee Store — fashion muslim pria dan anak yang adem, nyaman, tidak mudah kusut, dan mudah dipakai untuk berbagai momen.',
  path: '/',
};

export const notFoundPageMeta: PageMeta = {
  title: `Halaman tidak ditemukan — ${SITE_NAME}`,
  description: 'Halaman yang Anda cari tidak tersedia di Azmee Store.',
  path: '/404',
};

export function productPath(slug: string): string {
  return `/produk/${slug}`;
}

function firstParagraph(product: Product): string {
  const block = product.description.find((item) => item.type === 'paragraph');
  return block && block.type === 'paragraph' ? block.text : product.name;
}

function trimTo(text: string, limit = 155): string {
  if (text.length <= limit) return text;
  const cut = text.slice(0, limit);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 60 ? lastSpace : limit).trimEnd()}…`;
}

export function productPageMeta(product: Product): PageMeta {
  return {
    title: `${product.name} — ${SITE_NAME}`,
    description: trimTo(firstParagraph(product)),
    path: productPath(product.slug),
  };
}

export function canonicalUrl(path: string): string {
  return `${SITE_URL}${path === '/' ? '/' : path}`;
}

function setAttribute(selector: string, attribute: 'content' | 'href', value: string) {
  if (typeof document === 'undefined') return;
  const element = document.querySelector(selector);
  if (!element) return;
  element.setAttribute(attribute, value);
}

export function applyPageMeta(meta: PageMeta) {
  if (typeof document === 'undefined') return;

  const canonical = canonicalUrl(meta.path);

  document.title = meta.title;
  setAttribute('meta[name="description"]', 'content', meta.description);
  setAttribute('link[rel="canonical"]', 'href', canonical);
  setAttribute('meta[property="og:title"]', 'content', meta.title);
  setAttribute('meta[property="og:description"]', 'content', meta.description);
  setAttribute('meta[property="og:url"]', 'content', canonical);
  setAttribute('meta[name="twitter:title"]', 'content', meta.title);
  setAttribute('meta[name="twitter:description"]', 'content', meta.description);
}

function parsePriceRange(price: string): { low: number; high: number } | null {
  const numbers = price
    .match(/\d[\d.]*/g)
    ?.map((value) => Number(value.replace(/\./g, '')))
    .filter((value) => Number.isFinite(value) && value > 0);

  if (!numbers || numbers.length === 0) return null;

  return { low: Math.min(...numbers), high: Math.max(...numbers) };
}

export function productJsonLd(product: Product) {
  const range = parsePriceRange(product.price);

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: firstParagraph(product),
    image: [`${SITE_URL}${product.image}`],
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: SITE_NAME,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      bestRating: 5,
      worstRating: 1,
    },
    ...(range && product.url
      ? {
          offers:
            range.low === range.high
              ? {
                  '@type': 'Offer',
                  priceCurrency: 'IDR',
                  price: range.low,
                  url: product.url,
                }
              : {
                  '@type': 'AggregateOffer',
                  priceCurrency: 'IDR',
                  lowPrice: range.low,
                  highPrice: range.high,
                  url: product.url,
                },
        }
      : {}),
  };
}
