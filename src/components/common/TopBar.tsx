import Breadcrumb from "./Breadcrumb";


interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface TopBarProps {
    actions: React.ReactNode;
    breadcrumbItems: BreadcrumbItem[];
}

export default function TopBar({ breadcrumbItems, actions }: TopBarProps) {
    return (
        <div className="flex items-center justify-between p-4 border-b text-gray-900 font-semibold bg-white">
            <Breadcrumb items={breadcrumbItems} />
            <div className="flex items-center gap-2">
                {actions}
            </div>
        </div>
    );
}