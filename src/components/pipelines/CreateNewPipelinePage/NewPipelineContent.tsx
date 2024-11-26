// components/pipelines/NewPipelineContent.tsx
'use client';

import { useState } from 'react';
import SearchBar from './SearchBar';
import FilterPanel from './FilterPanel';
import TemplateGrid from './TemplateGrid';

export default function NewPipelineContent() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleCategoriesChange = (categories: string[]) => {
        setSelectedCategories(categories);
    };

    return (
        <div className="flex flex-1 h-full">
            {/* Left Panel */}
            <div className="w-64 flex-shrink-0 border-r border-gray-200 bg-white">
                <div className="p-4 flex flex-col gap-6">
                    <SearchBar onSearch={handleSearch} />
                    <FilterPanel onCategoriesChange={handleCategoriesChange} />
                </div>
            </div>

            {/* Right Panel */}
            <div className="flex-1 overflow-auto p-6 bg-white">
                <TemplateGrid
                    searchQuery={searchQuery}
                    selectedCategories={selectedCategories}
                />
            </div>
        </div>
    );
}