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
    const commonClasses = "text-xs font-semibold uppercase tracking-wider";

    return (
        <div className="flex items-center gap-2">
            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    {index > 0 && <span className="text-gray-400">/</span>}
                    {item.href ? (
                        <Link
                            href={item.href}
                            className={`${commonClasses} text-gray-600 hover:text-violet-600 transition-colors`}
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className={`${commonClasses} text-gray-900`}>
                            {item.label}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
}