import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check, MessageCircle, ShoppingBag } from 'lucide-react';
import { Lightbox } from '@/components/Lightbox';
import { ProductCard } from '@/components/ProductCatalog';
import { ProductGallery } from '@/components/ProductGallery';
import { PurchaseBar } from '@/components/PurchaseBar';
import { Reveal } from '@/components/Reveal';
import { SizeGuide } from '@/components/SizeGuide';
import { StarRating } from '@/components/StarRating';
import { Link } from '@/lib/router';
import {
  getProductBySlug,
  getRelatedProducts,
  storePromises,
  whatsappUrl,
} from '@/data/content';
import { NotFound } from '@/pages/NotFound';

type ProductDetailProps = {
  slug: string;
};

export function ProductDetail({ slug }: ProductDetailProps) {
  const product = getProductBySlug(slug);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [guideOpen, setGuideOpen] = useState(false);
  const [showPurchaseBar, setShowPurchaseBar] = useState(false);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setSelectedSize(null);
    setGuideOpen(false);
    setShowPurchaseBar(false);
  }, [slug]);

  useEffect(() => {
    const target = ctaRef.current;
    if (!target) return;

    const updateVisibility = () => {
      const rect = target.getBoundingClientRect();
      const ctaOutOfView = rect.bottom < 0 || rect.top > window.innerHeight;
      setShowPurchaseBar(window.scrollY > 240 && ctaOutOfView);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);

    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, [slug]);

  if (!product) return <NotFound />;

  const related = getRelatedProducts(product);
  const purchaseUrl = product.url ?? whatsappUrl;

  const handleSelectSize = (size: string) => {
    if (selectedSize === size) {
      setSelectedSize(null);
      return;
    }

    setSelectedSize(size);
    document.getElementById('ukuran')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <article className="bg-offwhite pb-24 pt-24 lg:pb-0 lg:pt-32">
        <div className="container-content">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-charcoal/70">
            <Link to="/" className="shrink-0 transition-colors hover:text-coksu-800">
              Beranda
            </Link>
            <span aria-hidden="true" className="text-coksu-300">
              /
            </span>
            <Link to="/#koleksi" className="shrink-0 transition-colors hover:text-coksu-800">
              Koleksi
            </Link>
            <span aria-hidden="true" className="text-coksu-300">
              /
            </span>
            <span aria-current="page" className="truncate text-charcoal/75">
              {product.name}
            </span>
          </nav>

          <div className="mt-6 grid gap-10 lg:mt-8 lg:grid-cols-12 lg:gap-12">
            <div className="min-w-0 lg:col-span-7">
              <ProductGallery images={product.images} name={product.name} />
            </div>

            <div className="min-w-0 lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <h1 className="font-display text-[2.35rem] font-medium leading-[0.98] tracking-tight text-coksu-950 sm:text-[2.9rem] lg:text-[3.05rem]">
                  {product.name}
                </h1>

                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <div className="flex items-center gap-2">
                    <StarRating rating={product.rating} size={15} />
                    <span className="text-sm font-medium text-coksu-900">{product.rating}</span>
                  </div>
                  <span aria-hidden="true" className="h-3 w-px bg-coksu-200" />
                  <span className="text-sm text-charcoal/65">16.000+ terjual</span>
                  {product.badge && (
                    <span className="rounded-full border border-coksu-300/80 px-2.5 py-0.5 text-[11px] font-medium text-coksu-700">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap items-baseline gap-3">
                  <span className="text-[1.45rem] font-semibold tracking-tight text-coksu-900">
                    {product.price.replace(/ - /g, ' – ')}
                  </span>
                  {product.oldPrice && (
                    <span className="text-sm text-charcoal/65 line-through">
                      {product.oldPrice.replace(/ - /g, ' – ')}
                    </span>
                  )}
                </div>

                <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-1.5 text-sm text-charcoal/70">
                      <Check size={14} strokeWidth={2.25} className="text-coksu-600" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {product.sizes && (
                  <div className="mt-7 border-t border-coksu-200/70 pt-6">
                    <div className="flex items-baseline justify-between gap-4">
                      <p className="text-sm font-medium text-coksu-950">Ukuran tersedia</p>
                      <Link
                        to="#ukuran"
                        className="text-xs font-semibold text-coksu-700 underline-offset-4 transition-colors hover:text-coksu-500 hover:underline"
                      >
                        Lihat tabel
                      </Link>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {product.sizes.map((size) => {
                        const isActive = selectedSize === size;
                        return (
                          <button
                            key={size}
                            type="button"
                            aria-pressed={isActive}
                            onClick={() => handleSelectSize(size)}
                            className={`rounded-md border px-3.5 py-2 text-xs font-semibold tabular-nums transition-colors ${
                              isActive
                                ? 'border-coksu-900 bg-coksu-900 text-cream'
                                : 'border-coksu-300/80 bg-white text-coksu-800 hover:border-coksu-500'
                            }`}
                          >
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="mt-7 space-y-3">
                  <a
                    ref={ctaRef}
                    href={purchaseUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex w-full items-center justify-between gap-3 rounded-full bg-coksu-900 px-6 py-4 text-sm font-semibold text-cream transition-colors hover:bg-coksu-950"
                  >
                    <span className="inline-flex items-center gap-2">
                      <ShoppingBag size={18} strokeWidth={1.75} />
                      Beli di TikTok Shop
                    </span>
                    <ArrowUpRight
                      size={18}
                      strokeWidth={2}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full border border-coksu-300 px-6 py-3.5 text-sm font-semibold text-coksu-800 transition-colors hover:bg-coksu-50"
                  >
                    <MessageCircle size={17} strokeWidth={1.75} />
                    Tanya ukuran via WhatsApp
                  </a>

                  <p className="pt-1 text-xs leading-relaxed text-charcoal/70">
                    Checkout dan pengiriman diproses di toko resmi kami.
                  </p>

                  <ul className="space-y-2.5 border-t border-coksu-200/70 pt-5">
                    {[
                      'Dicek sebelum dikirim',
                      'Bisa diretur jika tidak sesuai',
                      'Dibantu pilih ukuran via WhatsApp',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-charcoal/65">
                        <Check size={13} strokeWidth={2.25} className="text-coksu-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <section className="mt-16 border-t border-coksu-200/70 pt-14 lg:mt-24 lg:pt-20">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-4">
                <h2 className="font-display text-3xl font-medium leading-none tracking-tight text-coksu-950 sm:text-4xl">
                  Detail &amp; bahan
                </h2>

                <dl className="mt-8 divide-y divide-coksu-200/70 border-y border-coksu-200/70">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="grid grid-cols-[6.5rem_1fr] gap-4 py-3.5">
                      <dt className="text-[11px] uppercase tracking-[0.14em] text-charcoal/70">
                        {spec.label}
                      </dt>
                      <dd className="text-sm leading-relaxed text-coksu-900">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="lg:col-span-7 lg:col-start-6">
                <div className="max-w-[68ch] space-y-5 text-[15px] leading-[1.8] text-charcoal/75">
                  {product.description.map((block, index) => {
                    if (block.type === 'heading') {
                      return (
                        <h3
                          key={index}
                          className="!mt-9 font-display text-xl font-medium leading-snug text-coksu-950"
                        >
                          {block.text}
                        </h3>
                      );
                    }

                    if (block.type === 'list') {
                      return (
                        <ul key={index} className="list-disc space-y-2 pl-5 marker:text-coksu-400">
                          {block.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      );
                    }

                    return (
                      <p key={index} className={index === 0 ? 'editorial-lede' : undefined}>
                        {block.text}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>

        <SizeGuide
          product={product}
          selectedSize={selectedSize}
          onOpenGuide={() => setGuideOpen(true)}
        />

        <div className="container-content">
          <section className="mt-16 lg:mt-24">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <h2 className="font-display text-3xl font-medium leading-[1.02] tracking-tight text-coksu-950 sm:text-4xl">
                  Dari toko kami,{' '}
                  <br />
                  <span className="italic text-coksu-600">untuk pemakaian lama.</span>
                </h2>
              </div>

              <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:col-span-8">
                {storePromises.map((promise) => {
                  const Icon = promise.icon;
                  return (
                    <div key={promise.title} className="border-t border-coksu-300/60 pt-4">
                      <Icon size={18} strokeWidth={1.5} className="text-coksu-600" />
                      <h3 className="mt-3 font-display text-base font-medium text-coksu-950">
                        {promise.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-charcoal/70">
                        {promise.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="mt-16 border-t border-coksu-200/70 pt-14 lg:mt-24">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="font-display text-3xl font-medium leading-none tracking-tight text-coksu-950 sm:text-4xl">
                Lengkapi koleksimu
              </h2>
              <Link
                to="/#koleksi"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-coksu-800 transition-colors hover:text-coksu-600"
              >
                Semua koleksi
                <ArrowRight size={15} strokeWidth={2} />
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {related.map((item, index) => (
                <Reveal key={item.slug} delay={index * 80} className="h-full">
                  <ProductCard product={item} />
                </Reveal>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-20 bg-beige lg:mt-28">
          <div className="container-content grid gap-10 py-16 lg:grid-cols-12 lg:items-end lg:py-24">
            <div className="lg:col-span-7">
              <h2 className="font-display text-4xl font-medium leading-[0.95] tracking-tight text-coksu-950 sm:text-5xl">
                Pilih ukuran,{' '}
                <br />
                lalu <span className="italic text-coksu-700">tampil rapi.</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-charcoal/65">
                Pembayaran dan pengiriman diproses di toko resmi kami. Butuh bantuan ukuran?
                WhatsApp kami siap membantu.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
              <a
                href={purchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-coksu-900 px-7 py-4 text-sm font-semibold text-cream transition-colors hover:bg-coksu-950"
              >
                Beli di TikTok Shop
                <ArrowUpRight size={16} strokeWidth={2} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-coksu-400/60 px-7 py-4 text-sm font-semibold text-coksu-900 transition-colors hover:bg-white/50"
              >
                <MessageCircle size={16} strokeWidth={1.75} />
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </article>

      <PurchaseBar price={product.price} href={purchaseUrl} visible={showPurchaseBar} />

      {guideOpen && (
        <Lightbox
          images={[product.sizeGuideImage]}
          index={0}
          alt={product.sizeGuideAlt}
          onClose={() => setGuideOpen(false)}
        />
      )}
    </>
  );
}

