// components/common/Breadcrumb.tsx

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <div className="flex items-center gap-2">
            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
                    {item.href ? (
                        <Link
                            href={item.href}
                            className="text-xs font-medium text-gray-600 hover:text-gray-900 uppercase tracking-wide transition-colors text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-xs font-medium text-gray-900 uppercase tracking-wide text-xs font-semibold text-gray-700 uppercase tracking-wider">
                            {item.label}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
}