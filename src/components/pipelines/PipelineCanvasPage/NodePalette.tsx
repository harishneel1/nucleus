// components/pipelines/NodePalette.tsx
'use client';

import { useState } from 'react';
import { Search, LayoutGrid, Brain, Database, Plug, Download, Layers, GitBranch, MessageSquare, ChevronLeft, Grid } from 'lucide-react';

const nodeCategories = [
    {
        id: 'general',
        label: 'General',
        icon: LayoutGrid,
        nodes: [
            { type: 'input', label: 'Input', description: 'Starting point of your pipeline' },
            { type: 'output', label: 'Output', description: 'End point of your pipeline' },
            { type: 'text', label: 'Text', description: 'Add text content' },
            { type: 'pipeline', label: 'Pipeline', description: 'Embed another pipeline' },
            { type: 'transform', label: 'Transform', description: 'Transform data' },
            { type: 'file-save', label: 'File Save', description: 'Save output to a file' },
            { type: 'note', label: 'Note', description: 'Add notes to your pipeline' }
        ]
    },
    {
        id: 'llms',
        label: 'LLMs',
        icon: Brain,
        nodes: []
    },
    {
        id: 'knowledge-base',
        label: 'Knowledge Base',
        icon: Database,
        nodes: []
    },
    {
        id: 'integrations',
        label: 'Integrations',
        icon: Plug,
        nodes: []
    },
    {
        id: 'data-loaders',
        label: 'Data Loaders',
        icon: Download,
        nodes: []
    },
    {
        id: 'multi-modal',
        label: 'Multi-Modal',
        icon: Layers,
        nodes: []
    },
    {
        id: 'logic',
        label: 'Logic',
        icon: GitBranch,
        nodes: []
    },
    {
        id: 'chat',
        label: 'Chat',
        icon: MessageSquare,
        nodes: []
    }
];

export default function NodePalette() {
    const [selectedCategory, setSelectedCategory] = useState('general');
    const [searchQuery, setSearchQuery] = useState('');
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className="relative h-full">
            {/* Collapse Tab */}
            <div
                role="button"
                tabIndex={0}
                onClick={() => setIsExpanded(!isExpanded)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsExpanded(!isExpanded);
                    }
                }}
                className={`
                    fixed right-0 top-[calc(50%+26px)] -translate-y-1/2
                    flex items-center gap-2
                    px-2 py-3 
                    bg-white border border-gray-200/75
                    rounded-l-xl
                    shadow-sm hover:shadow-md
                    transition-all duration-200
                    z-20
                    group
                    cursor-pointer
                    ${isExpanded ? 'mr-[280px]' : 'border-r'}
                `}
                aria-label={isExpanded ? "Collapse node palette" : "Expand node palette"}
            >
                <ChevronLeft
                    className={`
                        w-4 h-4 
                        transition-transform duration-200 
                        ${isExpanded ? 'rotate-180' : ''}
                        text-gray-600 group-hover:text-violet-600
                    `}
                />
                {!isExpanded && (
                    <div className="flex flex-col items-center gap-1">
                        <Grid className="w-4 h-4 text-gray-600 group-hover:text-violet-600" />
                        <span className="text-[10px] font-medium text-gray-600 group-hover:text-violet-600 rotate-180"
                            style={{ writingMode: 'vertical-rl' }}>
                            Node Palette
                        </span>
                    </div>
                )}
            </div>

            {/* Main Palette */}
            <div
                className={`
                    fixed right-0 top-[58px] bottom-0
                    w-[280px] bg-white border-l border-gray-200/75
                    transform transition-all duration-300 ease-in-out
                    flex flex-col
                    shadow-lg
                    z-10
                    rounded-tl-xl rounded-bl-xl
                    ${isExpanded ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
                {/* Search Bar */}
                <div className="p-3 border-b border-gray-200/75">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-2.5 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-gray-500" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search nodes..."
                            className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-200/75 rounded-lg
                                     focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Category Grid */}
                <div className="p-2 border-b border-gray-200/75 bg-gray-50/75">
                    <div className="grid grid-cols-4 gap-1">
                        {nodeCategories.map((category) => {
                            const Icon = category.icon;
                            const isSelected = selectedCategory === category.id;

                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`
                                        flex flex-col items-center justify-center p-2 rounded-lg gap-1
                                        transition-all duration-150
                                        ${isSelected
                                            ? 'bg-violet-50 text-violet-600 shadow-sm'
                                            : 'text-gray-600 hover:bg-gray-100 hover:shadow-sm'
                                        }
                                    `}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span className="text-[10px] font-medium">{category.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Nodes List */}
                <div className="flex-1 overflow-y-auto p-2">
                    <div className="space-y-2">
                        {nodeCategories
                            .find(c => c.id === selectedCategory)?.nodes
                            .map((node) => (
                                <div
                                    key={node.type}
                                    draggable
                                    className="flex items-start gap-3 p-3 rounded-xl border border-gray-200/75
                                             bg-white hover:border-violet-200 hover:shadow-sm 
                                             cursor-move transition-all duration-150"
                                    onDragStart={(e) => {
                                        e.dataTransfer.setData('application/reactflow', node.type);
                                        e.dataTransfer.effectAllowed = 'move';
                                    }}
                                >
                                    <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
                                        <LayoutGrid className="w-4 h-4 text-gray-600" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm font-medium text-gray-900 truncate">
                                            {node.label}
                                        </h3>
                                        <p className="text-xs text-gray-500 truncate">
                                            {node.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}