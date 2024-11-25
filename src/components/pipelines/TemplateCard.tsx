// components/pipelines/TemplateCard.tsx
'use client';

import { useRouter } from 'next/navigation';
import { Template } from '@/types/pipeline';

interface TemplateCardProps {
    template: Template;
}

export default function TemplateCard({ template }: TemplateCardProps) {
    const router = useRouter();

    const handleClick = () => {
        const uniqueId = Math.random().toString(36).substr(2, 9);
        router.push(`/pipelines/${uniqueId}?template=${template.id}`);
    };

    return (
        <button
            onClick={handleClick}
            className="w-full flex flex-col p-4 rounded-lg border border-gray-200 
         hover:border-violet-200 hover:shadow-sm transition-all
         bg-white group h-[180px] justify-between"
        >
            <div className="flex items-start gap-3">
                {/* Icon and Content */}
                <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <template.icon className="w-5 h-5 text-violet-600" />
                </div>
                <div className="flex-1 min-w-0 text-left">
                    <h3 className="text-sm font-medium text-gray-900 group-hover:text-violet-600 
                                 transition-colors truncate">
                        {template.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                        {template.description}
                    </p>
                </div>
            </div>

            {/* Created by - Now consistently at bottom */}
            <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
                <span className="text-xs text-gray-500">
                    Created by: {template.createdBy}
                </span>
                <button className="text-xs text-violet-600 font-medium hover:bg-violet-50 rounded-md 
                 px-2.5 py-1.5 transition-colors opacity-0 group-hover:opacity-100 ml-4">
                    Use template →
                </button>
            </div>
        </button>
    );
}