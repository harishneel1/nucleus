// components/pipelines/SearchBar.tsx
'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        onSearch(newValue);
    };

    return (
        <div className="relative w-full">
            <input
                type="text"
                placeholder="Search"
                value={value}
                onChange={handleChange}
                className="w-full h-9 pl-9 pr-3 text-sm bg-white border border-gray-200 
                         rounded-md placeholder-gray-500 focus:outline-none 
                         focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            />
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 pointer-events-none" />
        </div>
    );
}