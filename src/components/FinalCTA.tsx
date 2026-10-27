import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { whatsappUrl } from '@/data/content';

export function FinalCTA() {
  return (
    <section id="kontak" className="editorial-section bg-offwhite">
      <Reveal className="container-content">
        <div className="relative overflow-hidden rounded-lg bg-coksu-900 px-8 py-20 text-center sm:px-12 sm:py-24 lg:py-28">
          {/* subtle texture */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-coksu-800/50 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-coksu-950/40 blur-3xl" />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-4xl font-medium leading-[0.95] tracking-tight text-cream sm:text-5xl lg:text-6xl">
              Saatnya Tampil Lebih{' '}
              <br />
              <span className="italic text-coksu-300">Rapi</span> Tanpa Mengorbankan{' '}
              <br />
              Kenyamanan.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-cream/65">
              Temukan koleksi fashion muslim pria dan anak yang nyaman, praktis, dan siap menemani
              setiap momen.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#koleksi"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cream px-8 py-4 text-sm font-semibold text-coksu-900 transition-all hover:bg-offwhite hover:shadow-lg sm:w-auto"
              >
                Belanja Sekarang
                <ArrowRight size={16} strokeWidth={2} />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/25 px-8 py-4 text-sm font-semibold text-cream transition-all hover:bg-coksu-800 sm:w-auto"
              >
                Chat Admin
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
