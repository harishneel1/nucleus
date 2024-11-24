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
        <div className="sticky top-0 flex items-center px-4 py-2 border-b bg-white text-sm text-gray-600">
            {showCheckbox && (
                <div className="flex items-center h-4 mr-4">
                    <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                        checked={isAllSelected}
                        onChange={onSelectAll}
                    />
                </div>
            )}
            {columns.map((column) => (
                <div
                    key={column.key}
                    className={`${column.width || 'flex-1'} ${column.align === 'right' ? 'text-right' : ''
                        } `}
                >
                    <span className="font-medium text-gray-900">
                        {column.label}
                    </span>
                </div>
            ))}
            <button className="p-1 ml-2 hover:bg-gray-50 rounded">
                <Plus className="w-4 h-4 text-gray-600" />
            </button>
        </div>
    );
}