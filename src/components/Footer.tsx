import { MessageCircle, Music, ShoppingBag, Link2 } from 'lucide-react';
import { whatsappUrl } from '@/data/content';
import { Link } from '@/lib/router';
import logo from '@/assets/images/logo.webp';

const nav = [
  { label: 'Beranda', href: '/#home' },
  { label: 'Koleksi', href: '/#koleksi' },
  { label: 'Baju Koko', href: '/koleksi/baju-koko-pria' },
  { label: 'Koko Kurta', href: '/koleksi/koko-kurta' },
  { label: 'Jubah Pria', href: '/koleksi/jubah-pria' },
  { label: 'Jubah Anak', href: '/koleksi/jubah-anak-laki-laki' },
  { label: 'Tentang Kami', href: '/#tentang' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Kontak', href: '/#kontak' },
];

const customerService = [
  { label: 'WhatsApp', icon: MessageCircle, href: whatsappUrl },
  { label: 'TikTok', icon: Music, href: 'https://tiktok.com/@azmeestore' },
  { label: 'Shopee Azmee Store', icon: ShoppingBag, href: 'https://shopee.co.id/azmee_store' },
  { label: 'Shopee Azri Olshop', icon: ShoppingBag, href: 'https://shopee.co.id/ika.sari1090' },
  { label: 'Lynk', icon: Link2, href: 'https://lynk.id/hameed8283' },
];

const info = [
  { label: 'Kebijakan Privasi', href: '/kebijakan-privasi' },
  { label: 'Syarat & Ketentuan', href: '/syarat-ketentuan' },
  { label: 'Kebijakan Pengiriman', href: '/kebijakan-pengiriman' },
  { label: 'Kebijakan Pengembalian', href: '/kebijakan-pengembalian' },
];

export function Footer() {
  return (
    <footer className="bg-coksu-950 text-cream">
      <div className="container-content py-16 lg:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link to="/" className="inline-flex">
              <img src={logo} alt="Azmee Store" className="h-10" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/50">
              Fashion muslim pria dan anak yang mengutamakan kenyamanan, kerapian, dan gaya.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-cream/40">
              Navigasi
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-cream/65 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-cream/40">
              Customer Service
            </h3>
            <ul className="mt-5 space-y-3">
              {customerService.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-cream/65 transition-colors hover:text-cream"
                    >
                      <Icon size={14} strokeWidth={1.75} />
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-cream/40">
              Informasi
            </h3>
            <ul className="mt-5 space-y-3">
              {info.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-sm text-cream/65 transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-cream/10 pt-8">
          <p className="text-center text-xs text-cream/40">
            &copy; 2026 Azmee Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
