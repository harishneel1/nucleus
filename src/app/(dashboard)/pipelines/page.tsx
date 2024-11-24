// PipeLines List page
'use client';

import { useState } from 'react';
import { GitBranch, LayoutGrid, Play } from 'lucide-react';
import MainPanel from '@/components/layout/MainPanel/MainPanel';

interface Pipeline {
    id: string;
    name: string;
    owner: {
        initials: string;
        bgColor: string;
    };
    updated: string;
}

const mockPipelines: Pipeline[] = [
    {
        id: '1',
        name: 'ChatBot Pipeline for BITS Pilani',
        owner: {
            initials: 'h',
            bgColor: 'bg-emerald-500'
        },
        updated: 'Nov 23'
    }
];

export default function PipelinesPage() {
    const [selectedPipelines, setSelectedPipelines] = useState<string[]>([]);
    const [isAllSelected, setIsAllSelected] = useState(false);

    const columns = [
        { key: 'name', label: 'Name', width: 'flex-1' },
        { key: 'owner', label: 'Owner', width: 'w-32' },
        { key: 'updated', label: 'Updated', width: 'w-32' },
    ];

    // Update the actions in PipelinesPage
    const actions = (
        <>
            <button
                className="flex items-center h-8 px-3 gap-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
            >
                <Play className="w-4 h-4" />
                <span>Run History</span>
            </button>
            <button
                className="flex items-center h-8 px-3 gap-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
            >
                <LayoutGrid className="w-4 h-4" />
                <span>Display</span>
            </button>
            <button
                className="h-8 px-3 text-sm font-medium bg-violet-600 text-white rounded-md hover:bg-violet-700"
            >
                New
            </button>
        </>
    );

    const handleSelectAll = () => {
        if (isAllSelected) {
            setSelectedPipelines([]);
        } else {
            setSelectedPipelines(mockPipelines.map(pipeline => pipeline.id));
        }
        setIsAllSelected(!isAllSelected);
    };

    const handleSelectPipeline = (pipelineId: string) => {
        if (selectedPipelines.includes(pipelineId)) {
            setSelectedPipelines(selectedPipelines.filter(id => id !== pipelineId));
        } else {
            setSelectedPipelines([...selectedPipelines, pipelineId]);
        }
    };

    return (
        <MainPanel
            breadcrumbItems={[
                { icon: <GitBranch className="w-5 h-5" />, label: 'Pipelines' }
            ]}
            actions={actions}
            columns={columns}
            showCheckbox
            onSelectAll={handleSelectAll}
            isAllSelected={isAllSelected}
        >
            <div className="divide-y">
                {mockPipelines.map((pipeline) => (
                    <div
                        key={pipeline.id}
                        className="flex items-center gap-4 p-4 hover:bg-gray-50"
                    >
                        <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300"
                            checked={selectedPipelines.includes(pipeline.id)}
                            onChange={() => handleSelectPipeline(pipeline.id)}
                        />
                        <div className="flex-1">{pipeline.name}</div>
                        <div className="w-32">
                            <div className={`w-6 h-6 rounded-full ${pipeline.owner.bgColor} flex items-center justify-center text-white uppercase`}>
                                {pipeline.owner.initials}
                            </div>
                        </div>
                        <div className="w-32 flex items-center gap-2">
                            <span>{pipeline.updated}</span>
                            <button className="p-1 hover:bg-gray-100 rounded">
                                <Play className="w-4 h-4 text-gray-600" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </MainPanel>
    );
}