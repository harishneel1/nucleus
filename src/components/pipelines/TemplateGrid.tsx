// components/pipelines/TemplateGrid.tsx
'use client';

import { useEffect, useState } from 'react';
import { templates } from '@/constants/pipelineTemplates';
import TemplateCard from './TemplateCard';
import { Template } from '@/types/pipeline';

interface TemplateGridProps {
    searchQuery?: string;
    selectedCategories?: string[];
}

export default function TemplateGrid({
    searchQuery = '',
    selectedCategories = []
}: TemplateGridProps) {
    const [filteredTemplates, setFilteredTemplates] = useState<Template[]>(templates);

    useEffect(() => {
        let filtered = templates;

        // Filter by search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(template =>
                template.title.toLowerCase().includes(query) ||
                template.description.toLowerCase().includes(query)
            );
        }

        // Filter by selected categories
        if (selectedCategories.length > 0) {
            filtered = filtered.filter(template =>
                template.categories.some(category =>
                    selectedCategories.includes(category)
                )
            );
        }

        setFilteredTemplates(filtered);
    }, [searchQuery, selectedCategories]);

    if (filteredTemplates.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center h-full py-12">
                <p className="text-sm text-gray-500">
                    No templates found matching your criteria
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredTemplates.map(template => (
                <TemplateCard key={template.id} template={template} />
            ))}
        </div>
    );
}