import { useCallback, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

type LightboxProps = {
  images: string[];
  index: number;
  alt: string;
  onClose: () => void;
  onIndexChange?: (index: number) => void;
};

export function Lightbox({ images, index, alt, onClose, onIndexChange }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const hasMany = images.length > 1;
  const safeIndex = Math.min(index, images.length - 1);

  const step = useCallback(
    (direction: number) => {
      if (!onIndexChange || images.length < 2) return;
      onIndexChange((safeIndex + direction + images.length) % images.length);
    },
    [safeIndex, images.length, onIndexChange],
  );

  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        step(1);
        return;
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        step(-1);
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('button');
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [onClose, step]);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      className="fixed inset-0 z-[70] flex flex-col bg-coksu-950"
    >
      <div className="flex items-center justify-between gap-4 px-5 py-4 text-cream">
        <p className="text-xs tabular-nums tracking-[0.2em] text-cream/60">
          {hasMany
            ? `${String(safeIndex + 1).padStart(2, '0')} / ${String(images.length).padStart(2, '0')}`
            : 'Panduan ukuran'}
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Tutup"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition-colors hover:bg-cream/10"
        >
          <X size={18} strokeWidth={1.75} />
        </button>
      </div>

      <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 sm:px-8">
        {hasMany && (
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Foto sebelumnya"
            className="absolute left-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 bg-coksu-950/70 text-cream transition-colors hover:bg-cream/10 sm:left-6"
          >
            <ChevronLeft size={20} strokeWidth={1.75} />
          </button>
        )}

        <img
          src={images[safeIndex]}
          alt={alt}
          className="h-full w-full object-contain"
          decoding="async"
        />

        {hasMany && (
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Foto berikutnya"
            className="absolute right-2 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 bg-coksu-950/70 text-cream transition-colors hover:bg-cream/10 sm:right-6"
          >
            <ChevronRight size={20} strokeWidth={1.75} />
          </button>
        )}
      </div>
    </div>
  );
}
