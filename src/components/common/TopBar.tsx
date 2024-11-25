import Breadcrumb from "./Breadcrumb";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '@/lib/store/slices/uiSlice';


interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface TopBarProps {
    actions: React.ReactNode;
    breadcrumbItems: BreadcrumbItem[];
}

export default function TopBar({ breadcrumbItems, actions }: TopBarProps) {
    const dispatch = useDispatch();
    const isSidebarCollapsed = useSelector((state) => state.ui.isSidebarCollapsed)

    return (
        <div className="flex items-center justify-between p-4 border-b text-gray-900 font-semibold bg-white">
            <div className="flex items-center gap-3">
                <button
                    onClick={() => dispatch(toggleSidebar())}
                    className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
                >
                    {isSidebarCollapsed ? (
                        <ChevronRight className="w-4 h-4 text-gray-600" />
                    ) : (
                        <ChevronLeft className="w-4 h-4 text-gray-600" />
                    )}
                </button>
                <Breadcrumb items={breadcrumbItems} />
            </div>
            <div className="flex items-center gap-2">
                {actions}
            </div>
        </div>
    );
}