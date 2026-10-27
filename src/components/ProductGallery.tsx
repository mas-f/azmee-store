import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Lightbox } from '@/components/Lightbox';

type ProductGalleryProps = {
  images: string[];
  name: string;
};

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const goTo = (next: number) => setActive((next + images.length) % images.length);

  useEffect(() => {
    setActive(0);
  }, [images]);

  useEffect(() => {
    const strip = thumbsRef.current;
    const thumb = strip?.querySelector<HTMLElement>(`[data-thumb="${active}"]`);
    if (!strip || !thumb) return;

    const left = thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2;
    strip.scrollTo({ left, behavior: 'smooth' });
  }, [active]);

  const handleStageKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(active + 1);
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(active - 1);
    }
  };

  return (
    <div>
      <div className="group relative overflow-hidden rounded-lg bg-coksu-100">
        <div className="relative aspect-square w-full">
          {images.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={index === 0 ? name : `${name} — foto ${index + 1}`}
              aria-hidden={index !== active}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              width={1200}
              height={1200}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-out ${
                index === active ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}

          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            onKeyDown={handleStageKeyDown}
            aria-label="Perbesar foto produk"
            className="absolute inset-0 z-10 cursor-zoom-in rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coksu-700 focus-visible:ring-offset-2"
          />
        </div>

        {images.length > 1 && (
          <>
            <p className="pointer-events-none absolute bottom-4 right-4 z-20 rounded-full bg-offwhite px-3 py-1 text-[11px] font-medium tabular-nums text-coksu-800">
              {String(active + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </p>

            <div className="pointer-events-none absolute inset-0 hidden items-center justify-between px-4 md:flex">
              <button
                type="button"
                onClick={() => goTo(active - 1)}
                aria-label="Foto sebelumnya"
                className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-coksu-200 bg-offwhite text-coksu-800 opacity-0 shadow-sm transition-all hover:bg-white focus-visible:opacity-100 group-hover:opacity-100"
              >
                <ChevronLeft size={18} strokeWidth={1.75} />
              </button>
              <button
                type="button"
                onClick={() => goTo(active + 1)}
                aria-label="Foto berikutnya"
                className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-coksu-200 bg-offwhite text-coksu-800 opacity-0 shadow-sm transition-all hover:bg-white focus-visible:opacity-100 group-hover:opacity-100"
              >
                <ChevronRight size={18} strokeWidth={1.75} />
              </button>
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div
          ref={thumbsRef}
          className="mt-3 flex gap-2 overflow-x-auto scroll-smooth pb-1 [scrollbar-width:thin]"
        >
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              data-thumb={index}
              onClick={() => goTo(index)}
              aria-label={`Tampilkan foto ${index + 1} dari ${images.length}`}
              aria-current={index === active}
              className={`relative h-20 w-16 shrink-0 overflow-hidden rounded-md bg-coksu-100 transition ${
                index === active
                  ? 'ring-2 ring-coksu-800'
                  : 'ring-1 ring-inset ring-coksu-200 hover:ring-coksu-400'
              }`}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {lightboxOpen && (
        <Lightbox
          images={images}
          index={active}
          alt={name}
          onClose={() => setLightboxOpen(false)}
          onIndexChange={setActive}
        />
      )}
    </div>
  );
}
