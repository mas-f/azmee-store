import { Maximize2 } from 'lucide-react';
import type { Product } from '@/data/content';

type SizeGuideProps = {
  product: Product;
  selectedSize: string | null;
  onOpenGuide: () => void;
};

const measuringTips = [
  {
    label: 'Lingkar dada',
    text: 'Ukur pada bagian terlebar dada. Meteran menempel tetapi tidak ditarik ketat.',
  },
  {
    label: 'Panjang lengan',
    text: 'Ukur dari puncak bahu sampai ujung pergelangan tangan.',
  },
  {
    label: 'Panjang badan',
    text: 'Ukur dari puncak bahu sampai ujung bawah pakaian yang biasa dipakai.',
  },
];

export function SizeGuide({ product, selectedSize, onOpenGuide }: SizeGuideProps) {
  const chart = product.sizeChart;

  return (
    <section id="ukuran" className="scroll-mt-24 border-y border-coksu-200/70 bg-cream">
      <div className="container-content py-16 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-medium leading-none tracking-tight text-coksu-950 sm:text-4xl">
            Panduan ukuran
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/65">
            Bandingkan lingkar dada dan panjang badan dengan pakaian yang sudah Anda miliki. Kalau
            masih ragu, tanyakan ukuran lewat WhatsApp sebelum memesan.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="min-w-0 lg:col-span-7">
            {chart && chart.columns && chart.rows ? (
              <>
                <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
                  <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
                    <caption className="sr-only">Tabel ukuran {product.name}</caption>
                    <thead>
                      <tr className="border-y border-coksu-300/70">
                        {chart.columns.map((column, columnIndex) => (
                          <th
                            key={column}
                            scope="col"
                            className={`py-3 pr-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-charcoal/70 ${
                              columnIndex === 0 ? 'pl-3' : ''
                            }`}
                          >
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {chart.rows.map((row) => {
                        const isSelected = selectedSize === row[0];
                        return (
                          <tr
                            key={row[0]}
                            className={`border-b border-coksu-200/60 align-top transition-colors ${
                              isSelected ? 'bg-coksu-900 text-cream' : 'hover:bg-white/60'
                            }`}
                          >
                            <th
                              scope="row"
                              className={`py-3 pl-3 pr-4 text-left font-semibold tabular-nums ${
                                isSelected ? 'text-cream' : 'text-coksu-900'
                              }`}
                            >
                              {row[0]}
                            </th>
                            {row.slice(1).map((cell, cellIndex) => (
                              <td
                                key={`${row[0]}-${cellIndex}`}
                                className={`py-3 pr-4 tabular-nums ${
                                  isSelected ? 'text-cream/75' : 'text-charcoal/70'
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                {chart.note && <p className="mt-4 text-xs leading-relaxed text-charcoal/70">{chart.note}</p>}
                {product.sizeNote && (
                  <p className="mt-1 text-xs leading-relaxed text-charcoal/70">{product.sizeNote}</p>
                )}
                <p className="mt-3 text-xs text-charcoal/70 sm:hidden">
                  Geser tabel ke samping untuk melihat semua kolom.
                </p>
              </>
            ) : (
              <div className="border-t border-coksu-300/70 pt-6">
                <h3 className="font-display text-xl font-medium text-coksu-950">Cara mengukur</h3>
                <dl className="mt-5 space-y-4">
                  {measuringTips.map((tip) => (
                    <div key={tip.label} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-4">
                      <dt className="text-sm font-semibold text-coksu-900">{tip.label}</dt>
                      <dd className="text-sm leading-relaxed text-charcoal/65">{tip.text}</dd>
                    </div>
                  ))}
                </dl>
                {product.sizeNote && (
                  <p className="mt-6 text-xs leading-relaxed text-charcoal/70">{product.sizeNote}</p>
                )}
              </div>
            )}
          </div>

          <figure className="min-w-0 lg:col-span-5">
            <button
              type="button"
              onClick={onOpenGuide}
              className="group relative block w-full overflow-hidden rounded-lg bg-white ring-1 ring-coksu-200/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coksu-700 focus-visible:ring-offset-2"
            >
              <img
                src={product.sizeGuideImage}
                alt={product.sizeGuideAlt}
                loading="lazy"
                decoding="async"
                className="mx-auto max-h-[30rem] w-full object-contain p-3 sm:p-5"
              />
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-offwhite px-3 py-1.5 text-[11px] font-medium text-coksu-800">
                <Maximize2 size={12} strokeWidth={2} />
                Perbesar
              </span>
            </button>
            <figcaption className="mt-3 text-xs text-charcoal/70">
              Gambar panduan ukuran dari toko.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

