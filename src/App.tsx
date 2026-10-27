import { useEffect } from 'react';
import { RouterProvider, useRouter } from '@/lib/router';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { ProductDetail } from '@/pages/ProductDetail';
import { NotFound } from '@/pages/NotFound';
import { getProductBySlug } from '@/data/content';
import { applyPageMeta, homePageMeta, notFoundPageMeta, productPageMeta } from '@/lib/seo';

const productRoute = /^\/produk\/([^/]+)$/;

function RouteView() {
  const { path } = useRouter();
  const match = productRoute.exec(path);

  if (path === '/') return <Home />;
  if (match) return <ProductDetail slug={decodeURIComponent(match[1])} />;
  return <NotFound />;
}

function PageMetaSync() {
  const { path } = useRouter();

  useEffect(() => {
    const match = productRoute.exec(path);
    const product = match ? getProductBySlug(decodeURIComponent(match[1])) : undefined;

    if (path === '/') {
      applyPageMeta(homePageMeta);
    } else if (product) {
      applyPageMeta(productPageMeta(product));
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
