// components/layout/MainPanel/Breadcrumb.tsx
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
    items: {
        icon?: React.ReactNode;
        label: string;
        href?: string;
    }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <div className="flex items-center gap-2">
            {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
                    <div className="flex items-center gap-2">
                        {item.icon && <div className="w-5 h-5">{item.icon}</div>}
                        <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">{item.label}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}