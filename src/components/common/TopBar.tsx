import Breadcrumb from "./Breadcrumb";
import { LayoutPanelLeft } from 'lucide-react';
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
        <div className="flex items-center justify-between py-[8px] px-4 border-b bg-white">
            <div className="flex items-center gap-1.5">
                <button
                    onClick={() => dispatch(toggleSidebar())}
                    className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-600"
                        style={{
                            transform: isSidebarCollapsed ? 'scaleX(-1)' : 'none',
                            transition: 'transform 0.3s ease'
                        }}
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2 4.5C2 4.22386 2.22386 4 2.5 4H13.5C13.7761 4 14 4.22386 14 4.5C14 4.77614 13.7761 5 13.5 5H2.5C2.22386 5 2 4.77614 2 4.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H13.5C13.7761 10 14 10.2239 14 10.5C14 10.7761 13.7761 11 13.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
                <Breadcrumb items={breadcrumbItems} />
            </div>
            <div className="flex items-center gap-2">
                {actions}
            </div>
        </div>
    );
}