import { Link } from '@/lib/router';

export type BreadcrumbItem = {
  label: string;
  to?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-charcoal/70">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={`${item.label}-${index}`} className="inline-flex min-w-0 items-center gap-2">
            {index > 0 && (
              <span aria-hidden="true" className="text-coksu-300">
                /
              </span>
            )}
            {item.to && !isLast ? (
              <Link to={item.to} className="shrink-0 transition-colors hover:text-coksu-800">
                {item.label}
              </Link>
            ) : (
              <span aria-current={isLast ? 'page' : undefined} className="truncate text-charcoal/75">
                {item.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
