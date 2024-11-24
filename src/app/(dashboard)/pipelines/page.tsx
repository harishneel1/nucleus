// PipeLines List page
'use client';

import { useState } from 'react';
import { GitBranch, LayoutGrid, Play, Plus } from 'lucide-react';
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
        { key: 'updated', label: 'Updated', width: 'w-32' }
    ];

    const actions = (
        <>
            <button
                className="flex items-center h-8 px-3 gap-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
            >
                <Play className="w-4 h-4" />
                <span>View Run History</span>
            </button>
            <button
                className="h-8 px-3 text-sm font-medium bg-violet-600 text-white rounded-md hover:bg-violet-700"
            >
                <span>Create Pipeline</span>
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
                        className="flex items-center px-4 py-2 hover:bg-gray-50 group"
                    >
                        <div className="flex items-center space-x-4 flex-1">
                            <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300"
                                checked={selectedPipelines.includes(pipeline.id)}
                                onChange={() => handleSelectPipeline(pipeline.id)}
                            />
                            <span className="text-sm text-gray-900">
                                {pipeline.name}
                            </span>
                        </div>
                        <div className="w-32 flex items-center pl-2">
                            <div className={`w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs`}>
                                h
                            </div>
                        </div>
                        <div className="w-40 pl-2">
                            <div className="w-32 text-sm text-gray-600">
                                {pipeline.updated}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </MainPanel>
    );
}