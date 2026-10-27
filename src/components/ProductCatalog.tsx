import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { StarRating } from '@/components/StarRating';
import { Link } from '@/lib/router';
import { products, type Product } from '@/data/content';
import { productPath } from '@/lib/seo';

export function ProductCard({ product }: { product: Product }) {
  const href = productPath(product.slug);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg bg-white transition-all hover:shadow-lg">
      <Link to={href} className="relative block aspect-[4/5] overflow-hidden bg-coksu-100">
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          width={940}
          height={1175}
        />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-coksu-900 px-3 py-1 text-xs font-medium text-cream">
            {product.badge}
          </span>
        )}
        {product.oldPrice && (
          <span className="absolute right-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-coksu-700">
            Hemat
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="text-xs font-medium uppercase tracking-widest text-coksu-500">
          {product.category}
        </p>
        <h3 className="mt-2 font-display text-base font-medium leading-snug text-coksu-950">
          <Link to={href} className="transition-colors hover:text-coksu-700">
            {product.name}
          </Link>
        </h3>

        <div className="mt-2 flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-xs text-charcoal/65">{product.rating}</span>
        </div>

        <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="text-lg font-semibold text-coksu-900">
            {product.price.replace(/ - /g, ' – ')}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-charcoal/65 line-through">
              {product.oldPrice.replace(/ - /g, ' – ')}
            </span>
          )}
        </div>

        <div className="mt-auto pt-4">
          <Link
            to={href}
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-coksu-200 bg-offwhite px-4 py-2.5 text-sm font-medium text-coksu-800 transition-all hover:bg-coksu-800 hover:text-cream"
          >
            Lihat Produk
            <ArrowRight size={14} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ProductCatalog() {
  return (
    <section id="koleksi" className="editorial-section bg-offwhite">
      <div className="container-content">
        <div className="mb-12 text-center lg:mb-16">
          <Reveal>
            <h2 className="font-display text-4xl font-medium leading-[0.95] tracking-tight text-coksu-950 sm:text-5xl">
              Temukan Gaya Muslim
              <br />
              <span className="italic text-coksu-600">Favoritmu.</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-charcoal/60">
              Koleksi pilihan Azmee Store untuk melengkapi penampilan pria dan anak laki-laki.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 90} className="h-full">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
