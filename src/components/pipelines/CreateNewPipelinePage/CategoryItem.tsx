// components/pipelines/CategoryItem.tsx
'use client';

import { Category } from '@/types/pipeline';
import { LucideIcon } from 'lucide-react';

interface CategoryItemProps {
    category: Category;
    isSelected: boolean;
    onClick: () => void;
}

export default function CategoryItem({ category, isSelected, onClick }: CategoryItemProps) {
    return (
        <button
            onClick={onClick}
            className={`
                w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-sm
                transition-colors duration-100 
                ${isSelected
                    ? 'bg-violet-50 text-violet-600'
                    : 'text-gray-700 hover:bg-gray-50'}
            `}
        >
            {category.icon && (
                <category.icon
                    className={`w-4 h-4 ${isSelected ? 'text-violet-600' : 'text-gray-500'}`}
                />
            )}
            <span>{category.label}</span>
        </button>
    );
}