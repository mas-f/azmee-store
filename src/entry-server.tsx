import { renderToString } from 'react-dom/server';
import App from './App';
import { products } from '@/data/content';
import { collections, getCollectionForProduct } from '@/data/collections';
import { policies } from '@/data/pages';
import {
  collectionFaqJsonLd,
  collectionJsonLd,
  collectionPageMeta,
  homeJsonLd,
  homePageMeta,
  policyJsonLd,
  policyPageMeta,
  productBreadcrumbJsonLd,
  productJsonLd,
  productPageMeta,
  type PageMeta,
} from '@/lib/seo';

export type PrerenderPage = PageMeta & {
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

export function render(url: string = '/'): string {
  return renderToString(<App initialPath={url} />);
}

export function getPages(): PrerenderPage[] {
  return [
    { ...homePageMeta, jsonLd: homeJsonLd() },
    ...products.map((product) => {
      const collection = getCollectionForProduct(product);
      return {
        ...productPageMeta(product),
        jsonLd: [
          productJsonLd(product) as Record<string, unknown>,
          productBreadcrumbJsonLd(product, collection) as Record<string, unknown>,
        ],
      };
    }),
    ...collections.map((collection) => ({
      ...collectionPageMeta(collection),
      jsonLd: [
        ...collectionJsonLd(collection),
        collectionFaqJsonLd(collection) as Record<string, unknown>,
      ],
    })),
    ...policies.map((policy) => ({
      ...policyPageMeta(policy),
      jsonLd: policyJsonLd(policy),
    })),
  ];
}
