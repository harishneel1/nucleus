// components/layout/MainPanel/TopBar.tsx
interface TopBarProps {
    breadcrumb: React.ReactNode;
    actions: React.ReactNode;
}

export default function TopBar({ breadcrumb, actions }: TopBarProps) {
    return (
        <div className="flex items-center justify-between p-4 border-b text-gray-900 font-semibold bg-white">
            {breadcrumb}
            <div className="flex items-center gap-2">
                {actions}
            </div>
        </div>
    );
}