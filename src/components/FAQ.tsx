import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { faqItems } from '@/data/content';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="editorial-section bg-white">
      <div className="container-content">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — heading */}
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="font-display text-4xl font-medium leading-[0.95] tracking-tight text-coksu-950 sm:text-5xl">
                Pertanyaan{' '}
                <br />
                yang Sering{' '}
                <br />
                <span className="italic text-coksu-600">Ditanyakan.</span>
              </h2>
            </Reveal>
          </div>

          {/* Right — FAQ items */}
          <div className="lg:col-span-8">
            <div className="space-y-3">
              {faqItems.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <Reveal key={item.question} delay={i * 50}>
                    <div
                      className={`overflow-hidden rounded-lg border transition-all ${
                        isOpen ? 'border-coksu-200 bg-offwhite shadow-sm' : 'border-coksu-100/60 bg-white hover:border-coksu-200'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      >
                        <span className="text-base font-medium text-coksu-950">
                          {item.question}
                        </span>
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                            isOpen ? 'bg-coksu-800 text-cream' : 'bg-coksu-100 text-coksu-700'
                          }`}
                        >
                          {isOpen ? <Minus size={16} strokeWidth={2} /> : <Plus size={16} strokeWidth={2} />}
                        </span>
                      </button>
                      <div
                        className={`grid transition-all duration-300 ease-out ${
                          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-6 pb-5 text-sm leading-relaxed text-charcoal/65">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
