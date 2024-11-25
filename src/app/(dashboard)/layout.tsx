// app/(dashboard)/layout.tsx
'use client';

import { useAppSelector } from '@/lib/store/hooks';
import Sidebar from '@/components/common/Sidebar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const isSidebarCollapsed = useAppSelector((state) => state.ui.isSidebarCollapsed);

    return (
        <div className="h-screen flex flex-col">
            <div className="flex-1 flex overflow-hidden bg-[#f8f9fb] gap-2 p-2">
                {/* Sidebar wrapper with smooth transition */}
                <div
                    className={`
                        flex-shrink-0
                        shadow-[0_2px_8px_0_rgb(0,0,0,0.08)] 
                        rounded-xl bg-white
                        transition-[width] duration-300 ease-in-out
                        ${isSidebarCollapsed ? 'w-[72px]' : 'w-[240px]'}
                    `}
                >
                    <Sidebar />
                </div>
                <main className="flex-1 flex flex-col overflow-hidden">
                    <div className="flex-1 overflow-hidden rounded-xl bg-white shadow-[0_2px_8px_0_rgb(0,0,0,0.08)]">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}