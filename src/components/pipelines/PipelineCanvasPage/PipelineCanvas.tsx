// components/pipelines/PipelineCanvas.tsx
'use client';

import { useCallback } from 'react';
import ReactFlow, {
    Background,
    Controls,
    Panel,
    addEdge,
    Node,
    Edge,
    Connection,
    useNodesState,
    useEdgesState
} from 'reactflow';
import 'reactflow/dist/style.css';
import NodePalette from './NodePalette';
import InputNode from '@/components/nodes/InputNode/InputNode';

const nodeTypes = {
    input: InputNode
}

const initialNodes = [
    {
        id: '1',
        type: 'input',
        position: { x: 100, y: 100 },
        data: {
            label: 'Input Node',
            type: 'input',
            fieldName: 'userInput',
            fieldType: 'text' as const,
            defaultValue: ''
        }
    }
];

export default function PipelineCanvas() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    const onConnect = useCallback((params: Edge | Connection) => {
        setEdges((eds) => addEdge(params, eds));
    }, [setEdges]);

    const onDrop = useCallback(
        (event: React.DragEvent) => {
            event.preventDefault();

            const type = event.dataTransfer.getData('application/reactflow');
            if (typeof type === 'undefined' || !type) return;

            const reactFlowBounds = document.querySelector('.react-flow')?.getBoundingClientRect();
            if (!reactFlowBounds) return;

            const position = {
                x: event.clientX - reactFlowBounds.left,
                y: event.clientY - reactFlowBounds.top
            };

            const newNode: Node = {
                id: `${type}-${nodes.length + 1}`,
                type: 'base',
                position,
                data: { label: `${type} node`, type }
            };

            setNodes((nds) => nds.concat(newNode));
        },
        [nodes, setNodes]
    );

    const onDragOver = useCallback((event: React.DragEvent) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    return (
        <div className="h-full">
            <ReactFlow
                nodes={nodes}
                nodeTypes={nodeTypes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onDrop={onDrop}
                onDragOver={onDragOver}
                fitView
                className="bg-gray-50"
            >
                <Background gap={16} size={1} />
                <Controls
                    position="bottom-left"
                    className="translate-x-2 -translate-y-2"
                />
            </ReactFlow>
            <NodePalette />
        </div>
    );
}