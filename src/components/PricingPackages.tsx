import { Check, ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { packages } from '@/data/content';

export function PricingPackages() {
  return (
    <section id="paket" className="bg-offwhite py-16 sm:py-20 lg:py-24">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-coksu-500">
              Paket Hemat
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-coksu-950 sm:text-4xl">
              Pilih Paket yang Paling Cocok
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 text-base leading-relaxed text-charcoal/65">
              Bundling praktis untuk kebutuhan sehari-hari, keluarga, hingga acara spesial.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 100} className="h-full">
              <div
                className={`flex h-full flex-col rounded-2xl border p-7 transition-all hover:-translate-y-1 hover:shadow-lg ${
                  pkg.featured
                    ? 'border-coksu-800 bg-coksu-800 text-cream shadow-md'
                    : 'border-coksu-100 bg-cream/60 text-charcoal hover:border-coksu-200'
                }`}
              >
                <h3 className={`text-lg font-bold ${pkg.featured ? 'text-cream' : 'text-coksu-950'}`}>
                  {pkg.name}
                </h3>
                <p className={`mt-1.5 text-sm ${pkg.featured ? 'text-cream/75' : 'text-charcoal/60'}`}>
                  {pkg.description}
                </p>

                <div className="mt-5">
                  <p className={`text-xs font-medium ${pkg.featured ? 'text-cream/60' : 'text-coksu-500'}`}>
                    Harga mulai dari
                  </p>
                  <p className={`mt-1 text-2xl font-extrabold ${pkg.featured ? 'text-cream' : 'text-coksu-900'}`}>
                    {pkg.price}
                  </p>
                </div>

                <ul className="mt-5 flex-1 space-y-2.5">
                  {['Material adem & nyaman', 'Tidak mudah kusut', 'Mudah dirawat'].map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          pkg.featured ? 'bg-cream/15 text-cream' : 'bg-coksu-100 text-coksu-700'
                        }`}
                      >
                        <Check size={12} strokeWidth={2.5} />
                      </span>
                      <span className={`text-sm ${pkg.featured ? 'text-cream/85' : 'text-charcoal/75'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#koleksi"
                  className={`mt-6 inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                    pkg.featured
                      ? 'bg-cream text-coksu-900 hover:bg-offwhite'
                      : 'border border-coksu-300 bg-offwhite text-coksu-800 hover:bg-coksu-800 hover:text-cream'
                  }`}
                >
                  {pkg.cta}
                  <ArrowRight size={14} strokeWidth={2} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
