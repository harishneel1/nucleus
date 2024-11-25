// components/layout/MainPanel/TableHeader.tsx
import { Plus } from 'lucide-react';

interface Column {
    key: string;
    label: string;
    width?: string;
    align?: 'left' | 'right';
}

interface TableHeaderProps {
    columns: Column[];
    showCheckbox?: boolean;
    onSelectAll?: () => void;
    isAllSelected?: boolean;
}

export default function TableHeader({
    columns,
    showCheckbox = true,
    onSelectAll,
    isAllSelected
}: TableHeaderProps) {
    return (
        <div className="sticky top-0 bg-white border-b">
            <div className="flex items-center h-11 px-4 bg-gray-50/80 backdrop-blur-sm">
                {showCheckbox && (
                    <div className="flex items-center h-4 mr-4">
                        <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500 cursor-pointer"
                            checked={isAllSelected}
                            onChange={onSelectAll}
                        />
                    </div>
                )}
                {columns.map((column) => (
                    <div
                        key={column.key}
                        className={`${column.width || 'flex-1'} ${column.align === 'right' ? 'text-right' : ''}`}
                    >
                        <span className="text-sm font-medium text-gray-600 select-none">
                            {column.label}
                        </span>
                    </div>
                ))}
                <button className="p-1.5 hover:bg-white/80 rounded-md transition-colors ml-2">
                    <Plus className="w-4 h-4 text-gray-600" />
                </button>
            </div>
        </div>
    );
}