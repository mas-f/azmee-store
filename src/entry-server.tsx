import { renderToString } from 'react-dom/server';
import App from './App';
import { products } from '@/data/content';
import {
  homePageMeta,
  productJsonLd,
  productPageMeta,
  type PageMeta,
} from '@/lib/seo';

export type PrerenderPage = PageMeta & {
  jsonLd?: Record<string, unknown>;
};

export function render(url: string = '/'): string {
  return renderToString(<App initialPath={url} />);
}

export function getPages(): PrerenderPage[] {
  return [
    { ...homePageMeta },
    ...products.map((product) => ({
      ...productPageMeta(product),
      jsonLd: productJsonLd(product) as Record<string, unknown>,
    })),
  ];
}
