// app/(dashboard)/layout.tsx
import Sidebar from '@/components/layout/Sidebar';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen flex flex-col">
            <div className="flex-1 flex overflow-hidden">
                <Sidebar />
                <main className="flex-1 overflow-auto bg-[#f8f9fb]">
                    {children}
                </main>
            </div>
        </div>
    );
}