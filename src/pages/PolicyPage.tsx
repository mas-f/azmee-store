import { ArrowLeft, MessageCircle } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { whatsappUrl } from '@/data/content';
import { getPolicyBySlug } from '@/data/pages';
import { Link } from '@/lib/router';
import { NotFound } from '@/pages/NotFound';

type PolicyPageProps = {
  slug: string;
};

export function PolicyPage({ slug }: PolicyPageProps) {
  const policy = getPolicyBySlug(slug);

  if (!policy) return <NotFound />;

  return (
    <article className="bg-offwhite pb-24 pt-24 lg:pt-32">
      <div className="container-content">
        <Breadcrumbs
          items={[
            { label: 'Beranda', to: '/' },
            { label: policy.name },
          ]}
        />

        <header className="mt-8 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-coksu-600">
            Informasi
          </p>
          <h1 className="mt-4 font-display text-4xl font-medium leading-[0.98] tracking-tight text-coksu-950 sm:text-5xl lg:text-6xl">
            {policy.name}
          </h1>
          <p className="editorial-lede mt-6">{policy.intro}</p>
          <p className="mt-4 text-xs text-charcoal/60">Terakhir diperbarui: {policy.updated}</p>
        </header>

        <div className="mt-12 max-w-3xl border-t border-coksu-200/70">
          {policy.sections.map((section) => (
            <section key={section.heading} className="border-b border-coksu-200/70 py-8">
              <h2 className="font-display text-2xl font-medium leading-snug text-coksu-950">
                {section.heading}
              </h2>

              {section.paragraphs && (
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-[15px] leading-[1.8] text-charcoal/75">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {section.bullets && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-[1.8] text-charcoal/75 marker:text-coksu-400">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-coksu-900 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-coksu-950"
          >
            <MessageCircle size={16} strokeWidth={1.75} />
            Tanya via WhatsApp
          </a>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-coksu-300 px-7 py-3.5 text-sm font-semibold text-coksu-800 transition-colors hover:bg-coksu-50"
          >
            <ArrowLeft size={15} strokeWidth={2} />
            Kembali ke beranda
          </Link>
        </div>
      </div>
    </article>
  );
}
