import React from 'react';
import { Handle, Position } from 'reactflow';
import { X, ArrowLeftRight, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface InputNodeData {
    label: string;
    type: string;
    fieldName: string;
    fieldType: 'text' | 'number' | 'boolean' | 'array';
    isValid?: boolean;
}

interface InputNodeProps {
    id: string;
    data: InputNodeData;
    selected?: boolean;
    onChange?: (data: Partial<InputNodeData>) => void;
    onDelete?: () => void;
}

export default function InputNode({ id, data, selected, onChange, onDelete }: InputNodeProps) {
    const isFieldNameValid = data.fieldName && data.fieldName.length > 0;

    return (
        <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className={cn(
                "relative bg-white rounded-lg w-[220px]",
                "transition-all duration-200 ease-in-out",
                "hover:shadow-md",
                selected
                    ? "ring-2 ring-violet-500"
                    : "ring-1 ring-gray-300 shadow-[0_0_1px_rgba(0,0,0,0.1)]",
            )}
        >
            {/* Enhanced Header */}
            <div className={cn(
                "flex items-center justify-between p-2",
                "bg-gradient-to-b from-gray-50 to-white",
                "border-b border-gray-100 rounded-t-lg"
            )}>
                <div className="flex items-center gap-2">
                    <div className="p-1 bg-violet-50 rounded">
                        <ArrowLeftRight className="w-3.5 h-3.5 text-violet-500" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">Input</span>
                </div>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onDelete}
                    className="hover:bg-gray-50 rounded p-1 transition-colors"
                >
                    <X className="w-3.5 h-3.5 text-gray-400" />
                </motion.button>
            </div>

            {/* Main Content */}
            <div className="p-2 space-y-2">
                {/* Field Name Section */}
                <div>
                    <div className="flex items-center justify-between mb-1.5 px-0.5">
                        <label className="text-[10px] uppercase tracking-wider font-medium text-gray-500 block">
                            Field Name
                        </label>
                        <span className="text-[10px] text-gray-400">
                            {data.fieldName.length}/50
                        </span>
                    </div>
                    <div className="relative">
                        <input
                            value={data.fieldName}
                            onChange={(e) => onChange?.({ fieldName: e.target.value })}
                            placeholder="input_1"
                            maxLength={50}
                            className="w-full px-2 h-7 text-[13px] rounded-md border border-gray-200 
             focus:outline-none focus:ring-1 focus:ring-violet-500/20 focus:border-violet-500"
                        />
                        {!isFieldNameValid && (
                            <div className="absolute right-2 top-1/2 -translate-y-1/2">
                                <AlertCircle className="w-4 h-4 text-red-500" />
                            </div>
                        )}
                    </div>
                    {!isFieldNameValid && (
                        <p className="mt-1 text-xs text-red-500">
                            Field name is required
                        </p>
                    )}
                </div>

                {/* Type Section */}
                <div>
                    <label className="text-[10px] uppercase tracking-wider font-medium text-gray-500 mb-1.5 block">
                        Type
                    </label>
                    <div className="relative">
                        <select
                            value={data.fieldType}
                            onChange={(e) => onChange?.({ fieldType: e.target.value as InputNodeData['fieldType'] })}
                            className={cn(
                                "w-full h-8 pl-2 pr-8 text-sm rounded-md",
                                "border border-gray-200 hover:border-gray-300",
                                "focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500",
                                "bg-white cursor-pointer appearance-none",
                                "transition-all duration-200"
                            )}
                        >
                            <option value="text">Text</option>
                            <option value="number">Number</option>
                            <option value="boolean">Boolean</option>
                            <option value="array">Array</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                            <svg className="h-4 w-4" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Connection Handle */}
            <div className="group">
                <Handle
                    type="source"
                    position={Position.Right}
                    id="output"
                    className={cn(
                        "w-3 h-3 !bg-white rounded-full",
                        "!border-2 !border-violet-500",
                        "transition-all duration-200",
                        "group-hover:!border-violet-600",
                        "group-hover:ring-4 group-hover:ring-violet-100",
                        "-right-1.5"
                    )}
                    style={{ top: '50%', transform: 'translateY(-50%)' }}  // This will center it vertically
                />
                <div className={cn(
                    "absolute top-[30px] right-6",
                    "px-2 py-1 rounded bg-gray-800 text-xs text-white",
                    "opacity-0 group-hover:opacity-100",
                    "transition-opacity duration-200",
                    "pointer-events-none"
                )}>
                    Output Connection
                </div>
            </div>
        </motion.div>
    );
}