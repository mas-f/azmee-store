import { useEffect } from 'react';
import { RouterProvider, useRouter } from '@/lib/router';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { ProductDetail } from '@/pages/ProductDetail';
import { CollectionPage } from '@/pages/CollectionPage';
import { PolicyPage } from '@/pages/PolicyPage';
import { NotFound } from '@/pages/NotFound';
import { getProductBySlug } from '@/data/content';
import { getCollectionBySlug } from '@/data/collections';
import { policies } from '@/data/pages';
import {
  applyPageMeta,
  collectionPageMeta,
  homePageMeta,
  notFoundPageMeta,
  policyPageMeta,
  productPageMeta,
} from '@/lib/seo';

const productRoute = /^\/produk\/([^/]+)$/;
const collectionRoute = /^\/koleksi\/([^/]+)$/;

function RouteView() {
  const { path } = useRouter();
  const productMatch = productRoute.exec(path);
  const collectionMatch = collectionRoute.exec(path);
  const policy = policies.find((item) => `/${item.slug}` === path);

  if (path === '/') return <Home />;
  if (productMatch) return <ProductDetail slug={decodeURIComponent(productMatch[1])} />;
  if (collectionMatch) return <CollectionPage slug={decodeURIComponent(collectionMatch[1])} />;
  if (policy) return <PolicyPage slug={policy.slug} />;
  return <NotFound />;
}

function PageMetaSync() {
  const { path } = useRouter();

  useEffect(() => {
    const productMatch = productRoute.exec(path);
    const collectionMatch = collectionRoute.exec(path);
    const product = productMatch ? getProductBySlug(decodeURIComponent(productMatch[1])) : undefined;
    const collection = collectionMatch
      ? getCollectionBySlug(decodeURIComponent(collectionMatch[1]))
      : undefined;
    const policy = policies.find((item) => `/${item.slug}` === path);

    if (path === '/') {
      applyPageMeta(homePageMeta);
    } else if (product) {
      applyPageMeta(productPageMeta(product));
    } else if (collection) {
      applyPageMeta(collectionPageMeta(collection));
    } else if (policy) {
      applyPageMeta(policyPageMeta(policy));
    } else {
      applyPageMeta(notFoundPageMeta);
    }
  }, [path]);

  return null;
}

type AppProps = {
  initialPath?: string;
};

function App({ initialPath }: AppProps) {
  return (
    <RouterProvider initialPath={initialPath}>
      <div className="min-h-screen bg-offwhite">
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-coksu-900 focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-cream"
        >
          Lewati ke konten
        </a>
        <Navbar />
        <main id="konten" tabIndex={-1}>
          <RouteView />
        </main>
        <Footer />
        <PageMetaSync />
      </div>
    </RouterProvider>
  );
}

export default App;
