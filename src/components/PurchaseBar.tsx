import { ArrowUpRight } from 'lucide-react';

type PurchaseBarProps = {
  price: string;
  href: string;
  visible: boolean;
};

export function PurchaseBar({ price, href, visible }: PurchaseBarProps) {
  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-coksu-200 bg-offwhite px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 transition-transform duration-300 ease-out lg:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0">
          <p className="text-[11px] text-charcoal/70">Harga</p>
          <p className="truncate text-sm font-semibold text-coksu-900">
            {price.replace(/ - /g, ' – ')}
          </p>
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          className="ml-auto inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-coksu-900 px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-coksu-950"
        >
          Beli di TikTok Shop
          <ArrowUpRight size={15} strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}

