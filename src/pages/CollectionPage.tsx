import { ArrowRight, MessageCircle, Plus, Sparkles } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ProductCard } from '@/components/ProductCatalog';
import { Reveal } from '@/components/Reveal';
import { collections, getCollectionBySlug, getCollectionProducts } from '@/data/collections';
import { whatsappUrl } from '@/data/content';
import { Link } from '@/lib/router';
import { NotFound } from '@/pages/NotFound';

type CollectionPageProps = {
  slug: string;
};

export function CollectionPage({ slug }: CollectionPageProps) {
  const collection = getCollectionBySlug(slug);

  if (!collection) return <NotFound />;

  const products = getCollectionProducts(collection);
  const heroProduct = products[0];
  const relatedCollections = collections.filter((item) => item.slug !== collection.slug).slice(0, 4);

  return (
    <article className="bg-offwhite pb-24 pt-24 lg:pt-32">
      <div className="container-content">
        <Breadcrumbs
          items={[
            { label: 'Beranda', to: '/' },
            { label: 'Koleksi', to: '/#koleksi' },
            { label: collection.name },
          ]}
        />

        <header className="mt-6 grid gap-10 lg:mt-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coksu-600">
                Koleksi
              </p>
              <h1 className="mt-4 font-display text-[2.7rem] font-medium leading-[0.95] tracking-tight text-coksu-950 sm:text-6xl lg:text-7xl">
                {collection.name}
              </h1>
              <p className="editorial-lede mt-6 max-w-xl">{collection.intro}</p>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-8 grid gap-4 border-t border-coksu-200/70 pt-6 sm:grid-cols-3">
                {collection.highlights.map((highlight) => (
                  <div key={highlight.title}>
                    <p className="text-sm font-semibold text-coksu-950">{highlight.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-charcoal/65">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-coksu-900 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-coksu-950"
                >
                  <MessageCircle size={16} strokeWidth={1.75} />
                  Tanya ukuran via WhatsApp
                </a>
                <Link
                  to="/#koleksi"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-coksu-300 px-7 py-3.5 text-sm font-semibold text-coksu-800 transition-colors hover:bg-coksu-50"
                >
                  Lihat semua koleksi
                  <ArrowRight size={15} strokeWidth={2} />
                </Link>
              </div>
            </Reveal>
          </div>

          {heroProduct && (
            <div className="lg:col-span-5">
              <Link
                to={`/produk/${heroProduct.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-lg bg-coksu-100"
              >
                <img
                  src={heroProduct.image}
                  alt={heroProduct.alt}
                  loading="eager"
                  fetchpriority="high"
                  width={1200}
                  height={1500}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute bottom-4 left-4 right-4 rounded-md bg-offwhite/95 p-4 backdrop-blur-sm">
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-coksu-600">
                    Pilihan utama
                  </span>
                  <span className="mt-1 block font-display text-lg font-medium text-coksu-950">
                    {heroProduct.name}
                  </span>
                </span>
              </Link>
            </div>
          )}
        </header>

        <section className="mt-16 border-t border-coksu-200/70 pt-12 lg:mt-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coksu-600">
                {products.length} produk
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium leading-none tracking-tight text-coksu-950 sm:text-4xl">
                Pilihan {collection.shortName}
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-charcoal/65">
              Setiap produk memiliki tabel ukuran dan bahan yang bisa Anda cek sebelum memesan.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {products.map((product, index) => (
              <Reveal key={product.slug} delay={index * 80} className="h-full">
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-10 border-t border-coksu-200/70 pt-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coksu-600">
              Panduan
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-[1.02] tracking-tight text-coksu-950 sm:text-4xl">
              Sebelum memilih,
              <br />
              <span className="italic text-coksu-600">cek ini dulu.</span>
            </h2>
          </div>

          <div className="space-y-5 lg:col-span-7 lg:col-start-6">
            {collection.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[15px] leading-[1.8] text-charcoal/75">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-coksu-200/70 pt-12 lg:mt-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coksu-600">
                Pertanyaan umum
              </p>
              <h2 className="mt-4 font-display text-3xl font-medium leading-none tracking-tight text-coksu-950 sm:text-4xl">
                Tentang {collection.shortName}
              </h2>
            </div>

            <div className="lg:col-span-8">
              {collection.faq.map((item) => (
                <details key={item.question} className="group border-b border-coksu-200/70">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-sm font-semibold text-coksu-950">
                    {item.question}
                    <Plus
                      size={16}
                      strokeWidth={1.75}
                      className="shrink-0 text-coksu-600 transition-transform duration-300 group-open:rotate-45"
                    />
                  </summary>
                  <p className="pb-5 pr-8 text-sm leading-relaxed text-charcoal/70">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-coksu-200/70 pt-10 lg:mt-20">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-coksu-950">
              <Sparkles size={16} strokeWidth={1.75} className="text-coksu-600" />
              Jelajahi koleksi lain
            </span>
            {relatedCollections.map((item) => (
              <Link
                key={item.slug}
                to={`/koleksi/${item.slug}`}
                className="rounded-full border border-coksu-300/80 px-4 py-2 text-xs font-semibold text-coksu-800 transition-colors hover:border-coksu-500 hover:bg-white"
              >
                {item.shortName}
              </Link>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-20 bg-beige lg:mt-28">
        <div className="container-content grid gap-10 py-16 lg:grid-cols-12 lg:items-end lg:py-24">
          <div className="lg:col-span-7">
            <h2 className="font-display text-4xl font-medium leading-[0.95] tracking-tight text-coksu-950 sm:text-5xl">
              Butuh bantuan
              <br />
              <span className="italic text-coksu-700">memilih ukuran?</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-charcoal/65">
              Kirim tinggi dan lingkar dada Anda lewat WhatsApp. Tim Azmee Store akan membantu
              mencocokkan ukuran sebelum Anda memesan.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-coksu-900 px-7 py-4 text-sm font-semibold text-cream transition-colors hover:bg-coksu-950"
            >
              <MessageCircle size={16} strokeWidth={1.75} />
              Chat WhatsApp
            </a>
            <Link
              to="/#kontak"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-coksu-400/60 px-7 py-4 text-sm font-semibold text-coksu-900 transition-colors hover:bg-white/50"
            >
              Hubungi kami
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
