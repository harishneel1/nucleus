// components/layout/MainPanel/MainPanel.tsx
import Breadcrumb from './Breadcrumb';
import TopBar from './TopBar';
import TableHeader from './TableHeader';

interface MainPanelProps {
    breadcrumbItems: {
        icon?: React.ReactNode;
        label: string;
        href?: string;
    }[];
    actions: React.ReactNode;
    columns: {
        key: string;
        label: string;
        width?: string;
    }[];
    showCheckbox?: boolean;
    onSelectAll?: () => void;
    isAllSelected?: boolean;
    children: React.ReactNode;
}

export default function MainPanel({
    breadcrumbItems,
    actions,
    columns,
    showCheckbox = true,
    onSelectAll,
    isAllSelected,
    children
}: MainPanelProps) {
    return (
        <div className="flex flex-col h-full">
            <TopBar
                breadcrumb={<Breadcrumb items={breadcrumbItems} />}
                actions={actions}
            />
            <TableHeader
                columns={columns}
                showCheckbox={showCheckbox}
                onSelectAll={onSelectAll}
                isAllSelected={isAllSelected}
            />
            <div className="flex-1 overflow-auto">
                {children}
            </div>
        </div>
    );
}