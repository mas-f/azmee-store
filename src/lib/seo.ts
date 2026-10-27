import { faqItems, type FaqItem, type Product } from '@/data/content';
import {
  getCollectionProducts,
  type Collection,
} from '@/data/collections';
import type { Policy } from '@/data/pages';

export const SITE_URL = 'https://www.azmee-store.my.id';
export const SITE_NAME = 'Azmee Store';

export type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  robots?: string;
};

export const homePageMeta: PageMeta = {
  title: 'Baju Koko, Jubah & Gamis Pria | Azmee Store',
  description:
    'Baju koko, koko kurta, jubah pria, dan jubah anak laki-laki dari bahan adem. Ukuran lengkap, harga mulai Rp125.000. Beli di Azmee Store.',
  path: '/',
  image: `${SITE_URL}/og-image.jpg`,
  imageAlt: 'Azmee Store, fashion muslim pria dan anak',
};

export const notFoundPageMeta: PageMeta = {
  title: `Halaman tidak ditemukan | ${SITE_NAME}`,
  description: 'Halaman yang Anda cari tidak tersedia di Azmee Store.',
  path: '/404',
  robots: 'noindex, follow',
};

export function productPath(slug: string): string {
  return `/produk/${slug}`;
}

export function collectionPath(slug: string): string {
  return `/koleksi/${slug}`;
}

export function policyPath(slug: string): string {
  return `/${slug}`;
}

function absoluteUrl(path: string): string {
  return path.startsWith('http') ? path : `${SITE_URL}${path}`;
}

export function productPageMeta(product: Product): PageMeta {
  return {
    title: product.seoTitle,
    description: product.metaDescription,
    path: productPath(product.slug),
    image: absoluteUrl(product.image),
    imageAlt: product.alt,
  };
}

export function collectionPageMeta(collection: Collection): PageMeta {
  const firstProduct = getCollectionProducts(collection)[0];

  return {
    title: collection.title,
    description: collection.description,
    path: collectionPath(collection.slug),
    image: firstProduct ? absoluteUrl(firstProduct.image) : `${SITE_URL}/og-image.jpg`,
    imageAlt: `${collection.name} Azmee Store`,
  };
}

export function policyPageMeta(policy: Policy): PageMeta {
  return {
    title: policy.title,
    description: policy.description,
    path: policyPath(policy.slug),
    image: `${SITE_URL}/og-image.jpg`,
    imageAlt: 'Azmee Store',
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
  setAttribute('meta[name="robots"]', 'content', meta.robots ?? 'index, follow');
  setAttribute('link[rel="canonical"]', 'href', canonical);
  setAttribute('meta[property="og:title"]', 'content', meta.title);
  setAttribute('meta[property="og:description"]', 'content', meta.description);
  setAttribute('meta[property="og:url"]', 'content', canonical);
  setAttribute('meta[property="og:type"]', 'content', meta.path.startsWith('/produk/') ? 'product' : 'website');
  setAttribute('meta[name="twitter:title"]', 'content', meta.title);
  setAttribute('meta[name="twitter:description"]', 'content', meta.description);

  if (meta.image) {
    setAttribute('meta[property="og:image"]', 'content', meta.image);
    setAttribute('meta[name="twitter:image"]', 'content', meta.image);
  }

  if (meta.imageAlt) {
    setAttribute('meta[property="og:image:alt"]', 'content', meta.imageAlt);
    setAttribute('meta[name="twitter:image:alt"]', 'content', meta.imageAlt);
  }
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
  const productUrl = canonicalUrl(productPath(product.slug));

  const offer = range
    ? range.low === range.high
      ? {
          '@type': 'Offer',
          priceCurrency: 'IDR',
          price: range.low,
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          url: product.url ?? productUrl,
          seller: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
          },
        }
      : {
          '@type': 'AggregateOffer',
          priceCurrency: 'IDR',
          lowPrice: range.low,
          highPrice: range.high,
          offerCount: 1,
          availability: 'https://schema.org/InStock',
          url: product.url ?? productUrl,
        }
    : null;

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.metaDescription,
    image: product.images.map((image) => absoluteUrl(image)),
    category: product.category,
    sku: product.slug,
    url: productUrl,
    brand: {
      '@type': 'Brand',
      name: SITE_NAME,
    },
    ...(offer ? { offers: offer } : {}),
  };
}

export function productBreadcrumbJsonLd(product: Product, collection?: Collection) {
  const items = [
    { name: 'Beranda', item: canonicalUrl('/') },
    ...(collection
      ? [{ name: collection.name, item: canonicalUrl(collectionPath(collection.slug)) }]
      : []),
    { name: product.name, item: canonicalUrl(productPath(product.slug)) },
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}

export function collectionJsonLd(collection: Collection) {
  const products = getCollectionProducts(collection);
  const url = canonicalUrl(collectionPath(collection.slug));

  const collectionPage = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: collection.name,
    description: collection.description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: product.name,
        url: canonicalUrl(productPath(product.slug)),
      })),
    },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { name: 'Beranda', item: canonicalUrl('/') },
      { name: collection.name, item: url },
    ].map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  };

  return [collectionPage, breadcrumb];
}

export function policyJsonLd(policy: Policy) {
  const url = canonicalUrl(policyPath(policy.slug));

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: policy.name,
      description: policy.description,
      url,
      inLanguage: 'id-ID',
      isPartOf: {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { name: 'Beranda', item: canonicalUrl('/') },
        { name: policy.name, item: url },
      ].map((entry, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: entry.name,
        item: entry.item,
      })),
    },
  ];
}

function faqJsonLd(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function homeJsonLd() {
  return faqJsonLd(faqItems);
}

export function collectionFaqJsonLd(collection: Collection) {
  return faqJsonLd(collection.faq);
}
