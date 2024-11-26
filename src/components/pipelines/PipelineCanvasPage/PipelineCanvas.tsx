// components/pipelines/PipelineCanvas.tsx
'use client';

import { useState, useCallback } from 'react';
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

export default function PipelineCanvas() {
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    const onConnect = useCallback((params: Edge | Connection) => {
        setEdges((eds) => addEdge(params, eds));
    }, [setEdges]);

    const onDrop = useCallback(
        (event: React.DragEvent) => {
            event.preventDefault();

            const type = event.dataTransfer.getData('application/reactflow');
            if (typeof type === 'undefined' || !type) return;

            const position = {
                x: event.clientX - 240,
                y: event.clientY - 60
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
        <div className="flex flex-col h-full">
            <div className="flex-1 relative">
                <ReactFlow
                    nodes={nodes}
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
                    <Controls />
                </ReactFlow>
            </div>
        </div>
    );
}