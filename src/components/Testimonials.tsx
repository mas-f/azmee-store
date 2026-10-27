import { Reveal } from '@/components/Reveal';
import { StarRating } from '@/components/StarRating';
import { testimonials } from '@/data/content';

function initials(name: string) {
  return name.charAt(0).toUpperCase();
}

export function Testimonials() {
  const featured = testimonials[0];
  const others = testimonials.slice(1);

  return (
    <section id="testimoni" className="editorial-section bg-offwhite">
      <div className="container-content">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — heading + featured testimonial */}
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="font-display text-4xl font-medium leading-[0.95] tracking-tight text-coksu-950 sm:text-5xl">
                Cerita Mereka yang{' '}
                <br />
                Sudah <span className="italic text-coksu-600">Memilih</span>{' '}
                <br />
                Azmee Store.
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <figure className="mt-12 rounded-lg bg-white p-8 sm:p-10">
                <StarRating rating={featured.rating} size={18} />
                <blockquote className="mt-6 font-display text-2xl font-medium leading-snug text-coksu-950 sm:text-3xl">
                  &ldquo;{featured.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coksu-100 text-sm font-semibold text-coksu-800">
                    {initials(featured.name)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-coksu-950">{featured.name}</p>
                    <p className="text-xs text-charcoal/50">{featured.city}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Right — other testimonials */}
          <div className="lg:col-span-5">
            <div className="space-y-4">
              {others.map((t, i) => (
                <Reveal key={t.name} delay={(i + 1) * 100}>
                  <figure className="rounded-lg border border-coksu-100/60 bg-white p-6">
                    <StarRating rating={t.rating} size={14} />
                    <blockquote className="mt-3 text-sm leading-relaxed text-charcoal/70">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-4 flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-coksu-100 text-xs font-semibold text-coksu-800">
                        {initials(t.name)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-coksu-950">{t.name}</p>
                        <p className="text-xs text-charcoal/50">{t.city}</p>
                      </div>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
