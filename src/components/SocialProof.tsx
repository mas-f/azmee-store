import { Reveal } from '@/components/Reveal';
import { stats } from '@/data/content';

export function SocialProof() {
  return (
    <section className="editorial-section bg-white">
      <div className="container-content">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="font-display text-4xl font-medium leading-[0.95] tracking-tight text-coksu-950 sm:text-5xl">
              Dipilih untuk <span className="italic text-coksu-600">Kenyamanan.</span>{' '}
              <br />
              Dipercaya untuk Setiap Momen.
            </h2>
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="text-center">
                <p className="font-display text-5xl font-medium tracking-tight text-coksu-800 sm:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm font-medium uppercase tracking-widest text-charcoal/50">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <p className="mt-12 text-center text-base italic text-coksu-600">
            Karena pakaian yang nyaman membuat setiap momen terasa lebih baik.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
