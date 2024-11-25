'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import TopBar from '@/components/common/TopBar';
import TableHeader from '@/components/common/TableHeader';
import { List } from '@/components/common/List/List';
import { useRouter } from 'next/navigation';


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
    },
    {
        id: '2',
        name: 'The Souled Store Workflow',
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
    const router = useRouter();


    const columns = [
        { key: 'name', label: 'Name', width: 'flex-1' },
        { key: 'owner', label: 'Owner', width: 'w-32' },
        { key: 'updated', label: 'Updated', width: 'w-32' }
    ];

    const handleCreatePipeline = () => {
        router.push('/pipelines/new');
    };

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
                onClick={handleCreatePipeline}

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
        <div className="flex flex-col h-full">
            <TopBar
                breadcrumbItems={[{ label: 'Pipelines' }]}
                actions={actions}
            />
            <TableHeader
                columns={columns}
                showCheckbox
                onSelectAll={handleSelectAll}
                isAllSelected={isAllSelected}
            />
            <div className="flex-1 overflow-auto">
                <div className="divide-y">
                    <List
                        items={mockPipelines}
                        selectedItems={selectedPipelines}
                        onSelectItem={handleSelectPipeline}
                        showOwner={true}
                        showUpdated={true}
                    />
                </div>
            </div>
        </div>
    );
}