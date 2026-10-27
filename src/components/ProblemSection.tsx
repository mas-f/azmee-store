import { Reveal } from '@/components/Reveal';
import { problems } from '@/data/content';

export function ProblemSection() {
  return (
    <section id="masalah" className="editorial-section bg-white">
      <div className="container-content">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — heading */}
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-display text-4xl font-medium leading-[0.95] tracking-tight text-coksu-950 sm:text-5xl">
                Pakaian Muslim{' '}
                <br />
                <span className="italic text-coksu-600">Seharusnya</span>{' '}
                <br />
                Tidak Merepotkan.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-charcoal/60">
                Memilih pakaian muslim yang nyaman dan praktis kadang terasa sulit. Berikut beberapa
                hal yang mungkin pernah Anda alami.
              </p>
            </Reveal>
          </div>

          {/* Right — problems list */}
          <div className="lg:col-span-7">
            <ul className="space-y-4">
              {problems.map((problem, i) => (
                <Reveal as="li" key={problem} delay={i * 80}>
                  <div className="group flex items-start gap-4 rounded-lg border border-coksu-100/60 bg-offwhite p-5 transition-all hover:border-coksu-200 hover:bg-white hover:shadow-sm">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-coksu-100 text-xs font-semibold text-coksu-700 transition-colors group-hover:bg-coksu-800 group-hover:text-cream">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-base leading-relaxed text-charcoal/75">{problem}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
