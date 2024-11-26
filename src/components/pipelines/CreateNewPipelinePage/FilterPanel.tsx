// components/pipelines/FilterPanel.tsx
'use client';

import { useState } from 'react';
import { pipelineCategories } from '@/constants/pipelineCategories';
import CategoryItem from './CategoryItem';

interface FilterPanelProps {
    onCategoriesChange: (categories: string[]) => void;
}

export default function FilterPanel({ onCategoriesChange }: FilterPanelProps) {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleCategoryClick = (categoryId: string) => {
        setSelectedCategories(prev => {
            const newSelection = prev.includes(categoryId)
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId];

            onCategoriesChange(newSelection);
            return newSelection;
        });
    };

    return (
        <div className="flex flex-col">
            <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3 px-3">
                Categories
            </h3>
            <div className="space-y-1 pb-2">
                {pipelineCategories.map(category => (
                    <CategoryItem
                        key={category.id}
                        category={category}
                        isSelected={selectedCategories.includes(category.id)}
                        onClick={() => handleCategoryClick(category.id)}
                    />
                ))}
            </div>
        </div>
    );
}