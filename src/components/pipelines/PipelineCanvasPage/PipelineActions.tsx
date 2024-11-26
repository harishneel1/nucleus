// components/pipelines/PipelineActions.tsx
'use client';

import { Share2, Play, Settings } from 'lucide-react';

export default function PipelineActions() {
    return (
        <>
            <button className="p-2 hover:bg-gray-100 rounded-md">
                <Share2 className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-md">
                <Play className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-md">
                <Settings className="w-4 h-4 text-gray-600" />
            </button>
        </>
    );
}