import { Reveal } from '@/components/Reveal';
import { valueItems } from '@/data/content';

export function ValueProposition() {
  return (
    <section id="tentang" className="editorial-section bg-offwhite">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="font-display text-4xl font-medium leading-[0.95] tracking-tight text-coksu-950 sm:text-5xl">
              Dirancang untuk <span className="italic text-coksu-600">Nyaman.</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-5 text-lg text-charcoal/60">
              Dibuat untuk menemani setiap momen.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {valueItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 100}>
                <div className="group flex flex-col items-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-coksu-100 text-coksu-700 transition-colors group-hover:bg-coksu-800 group-hover:text-cream">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-medium text-coksu-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
