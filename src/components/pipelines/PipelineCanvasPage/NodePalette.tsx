'use client';

import { useState } from 'react';
import { Search, LayoutGrid, Brain, Database, Plug, Download, Layers, GitBranch, MessageSquare } from 'lucide-react';

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
            { type: 'note', label: 'Note', description: 'Add notes to your pipeline' }, { type: 'output', label: 'Output', description: 'End point of your pipeline' },
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

    return (
        <div className="w-[280px] h-full bg-white border-r flex flex-col">
            {/* Search Bar */}
            <div className="p-3">
                <div className="relative">
                    <div className="absolute inset-y-0 left-2.5 flex items-center pointer-events-none">
                        <Search className="h-4 w-4 text-gray-500" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search nodes..."
                        className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md 
                                 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            {/* Category Grid */}
            <div className="p-2 border-y bg-gray-50">
                <div className="grid grid-cols-4 gap-1">
                    {nodeCategories.map((category) => {
                        const Icon = category.icon;
                        const isSelected = selectedCategory === category.id;

                        return (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`
                                    flex flex-col items-center justify-center p-2 rounded-md gap-1
                                    transition-colors duration-100
                                    ${isSelected
                                        ? 'bg-violet-50 text-violet-600'
                                        : 'text-gray-600 hover:bg-gray-100'
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
                        .map((node, index) => (
                            <div
                                key={node.type}
                                draggable
                                className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 
                                         bg-white hover:border-violet-200 hover:shadow-sm 
                                         cursor-move transition-all duration-100"
                                onDragStart={(e) => {
                                    e.dataTransfer.setData('application/reactflow', node.type);
                                    e.dataTransfer.effectAllowed = 'move';
                                }}
                            >
                                <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center flex-shrink-0">
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
    );
}