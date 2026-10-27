import { ArrowLeft } from 'lucide-react';
import { Link } from '@/lib/router';

export function NotFound() {
  return (
    <section className="bg-offwhite pb-24 pt-32 lg:pb-32 lg:pt-40">
      <div className="container-content">
        <div className="max-w-xl">
          <p className="font-display text-6xl font-medium leading-none text-coksu-200">404</p>
          <h1 className="mt-6 font-display text-4xl font-medium leading-[0.98] tracking-tight text-coksu-950 sm:text-5xl">
            Halaman yang Anda cari{' '}
            <br />
            <span className="italic text-coksu-600">tidak tersedia.</span>
          </h1>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-charcoal/65">
            Mungkin tautannya sudah berubah. Koleksi terbaru Azmee Store bisa Anda lihat dari beranda.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-coksu-800 px-7 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-coksu-900"
          >
            <ArrowLeft size={16} strokeWidth={2} />
            Kembali ke beranda
          </Link>
        </div>
      </div>
    </section>
  );
}
