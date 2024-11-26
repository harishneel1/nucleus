// app/pipelines/[id]/page.tsx
'use client';

import TopBar from "@/components/common/TopBar";
import PipelineCanvas from "@/components/pipelines/PipelineCanvasPage/PipelineCanvas";
import PipelineActions from "@/components/pipelines/PipelineCanvasPage/PipelineActions";
import PipelineStatus from "@/components/pipelines/PipelineCanvasPage/PipelineStatus";
import { useState } from 'react';

export default function PipelineEditorPage({ params }: { params: { id: string } }) {
    const [pipelineName, setPipelineName] = useState('Untitled Pipeline');
    const [isDeployed, setIsDeployed] = useState(false);
    const [isDraftSaved, setIsDraftSaved] = useState(true);

    const actions = (
        <div className="flex items-center gap-2">
            <PipelineStatus
                isDeployed={isDeployed}
                isDraftSaved={isDraftSaved}
            />
            <PipelineActions />
        </div>
    );

    return (
        <div className="flex flex-col h-full">
            <TopBar
                breadcrumbItems={[
                    { label: 'Pipelines', href: '/pipelines' },
                    {
                        label: pipelineName,
                        href: `/pipelines/${params.id}`,
                        isEditable: true,
                        onRename: setPipelineName
                    }
                ]}
                actions={actions}
            />
            <PipelineCanvas />
        </div>
    );
}