// app/(dashboard)/pipelines/new/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import TopBar from '@/components/common/TopBar';
import NewPipelineContent from '@/components/pipelines/CreateNewPipelinePage/NewPipelineContent';

export default function NewPipelinePage() {
    const router = useRouter();

    const handleBackClick = () => {
        router.push('/pipelines');
    };

    const handleStartBlank = () => {
        const uniqueId = Math.random().toString(36).substr(2, 9);
        router.push(`/pipelines/${uniqueId}`);
    };

    const actions = (
        <div className="flex items-center gap-2">
            <button
                onClick={handleBackClick}
                className="h-8 px-3 text-xs hover:bg-gray-50 rounded-md font-semibold uppercase tracking-wider text-gray-600"
            >
                Back to Pipelines
            </button>
            <button
                onClick={handleStartBlank}
                className="h-8 px-3 text-xs bg-violet-600 text-white hover:bg-violet-700 rounded-md font-semibold uppercase tracking-wider"
            >
                Start Blank
            </button>
        </div>
    );

    return (
        <div className="flex flex-col h-full">
            <TopBar
                breadcrumbItems={[
                    { label: 'Pipelines', href: '/pipelines' },
                    { label: 'Create Pipeline', href: '/pipelines/new' }
                ]}
                actions={actions}
            />
            <NewPipelineContent />
        </div>
    );
}