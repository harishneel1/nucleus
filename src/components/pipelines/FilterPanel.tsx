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
            <div className="text-sm font-medium text-gray-700 mb-2">Categories</div>
            <div className="flex flex-col space-y-0.5">
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