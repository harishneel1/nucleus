// app/(dashboard)/pipelines/new/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import TopBar from '@/components/common/TopBar';
import NewPipelineContent from '@/components/pipelines/NewPipelineContent';

export default function NewPipelinePage() {
    const router = useRouter();

    const handleBackClick = () => {
        router.push('/pipelines');
    };

    const handleStartBlank = () => {
        // Generate a unique ID - in real app this might come from an API
        const uniqueId = Math.random().toString(36).substr(2, 9);
        router.push(`/pipelines/${uniqueId}`);
    };

    const actions = (
        <div className="flex items-center gap-2">
            <button
                onClick={handleBackClick}
                className="h-8 px-3 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
            >
                Back to Pipelines
            </button>
            <button
                onClick={handleStartBlank}
                className="h-8 px-3 text-sm font-medium bg-violet-600 text-white rounded-md hover:bg-violet-700"
            >
                Start Blank
            </button>
        </div>
    );

    return (
        <div className="flex flex-col h-full">
            <TopBar
                breadcrumbItems={[
                    { label: 'Pipelines' },
                    { label: 'Create Pipeline' }
                ]}
                actions={actions}
            />
            <NewPipelineContent />
        </div>
    );
}