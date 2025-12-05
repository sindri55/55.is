import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { COLORS } from '../lib/constants';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      className="flex items-center gap-2 flex-wrap"
      aria-label="Breadcrumb"
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && (
            <ChevronRight
              className="w-4 h-4"
              style={{ color: COLORS.text.muted }}
            />
          )}
          {item.href ? (
            <Link
              href={item.href}
              className="transition-colors hover:text-[#00FFC2]"
              style={{
                fontSize: '14px',
                color: COLORS.text.secondary,
              }}
            >
              {item.label}
            </Link>
          ) : (
            <span
              style={{
                fontSize: '14px',
                color: COLORS.text.primary,
                fontWeight: 500,
              }}
            >
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
