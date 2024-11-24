// components/layout/Sidebar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutGrid,
    GitBranch,
    Book,
    Files,
    Wand2,
    MessageSquare,
    Search,
    FileSpreadsheet,
    Mic,
    Layers,
    Link2,
    Gauge,
    ArrowLeftRight,
    BarChart3,
    ChevronDown,
    Plus
} from 'lucide-react';

interface NavItem {
    icon: React.ReactNode;
    label: string;
    href: string;
    badge?: string;
}

const navItems: NavItem[] = [
    {
        icon: <GitBranch className="w-4 h-4" />,
        label: 'Pipelines',
        href: '/pipelines'
    },
    {
        icon: <LayoutGrid className="w-4 h-4" />,
        label: 'Marketplace',
        href: '/marketplace'
    },
    {
        icon: <Book className="w-4 h-4" />,
        label: 'Knowledge',
        href: '/knowledge'
    },
    {
        icon: <Files className="w-4 h-4" />,
        label: 'Files',
        href: '/files'
    },
    {
        icon: <Wand2 className="w-4 h-4" />,
        label: 'Automations',
        href: '/automations'
    },
    {
        icon: <MessageSquare className="w-4 h-4" />,
        label: 'Chatbots',
        href: '/chatbots'
    },
    {
        icon: <Search className="w-4 h-4" />,
        label: 'Search',
        href: '/search'
    },
    {
        icon: <FileSpreadsheet className="w-4 h-4" />,
        label: 'Forms',
        href: '/forms'
    },
    {
        icon: <Mic className="w-4 h-4" />,
        label: 'Voicebots',
        href: '/voicebots'
    },
    {
        icon: <Layers className="w-4 h-4" />,
        label: 'Bulk Jobs',
        href: '/bulk-jobs',
        badge: 'BETA'
    },
    {
        icon: <Link2 className="w-4 h-4" />,
        label: 'Portals',
        href: '/portals'
    },
    {
        icon: <Gauge className="w-4 h-4" />,
        label: 'Evaluations',
        href: '/evaluations'
    },
    {
        icon: <ArrowLeftRight className="w-4 h-4" />,
        label: 'Transformations',
        href: '/transformations'
    },
    {
        icon: <BarChart3 className="w-4 h-4" />,
        label: 'Analytics',
        href: '/analytics'
    }
];

export default function Sidebar() {
    const pathname = usePathname();
    const [workspaceExpanded, setWorkspaceExpanded] = useState(true);

    return (
        <div className="w-60 border-r bg-white flex flex-col h-full">
            {/* Workspace Selector */}
            <div className="p-3 border-b">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-violet-600 rounded flex items-center justify-center text-white text-sm">
                            VS
                        </div>
                        <span className="text-sm font-medium">Personal</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <button
                            onClick={() => setWorkspaceExpanded(!workspaceExpanded)}
                            className="p-1 hover:bg-gray-100 rounded"
                        >
                            <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${workspaceExpanded ? 'transform rotate-180' : ''
                                }`} />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded">
                            <Plus className="w-4 h-4 text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-2">
                <ul className="space-y-1">
                    {navItems.map((item) => {
                        const isActive = pathname.startsWith(item.href);
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm group ${isActive
                                        ? 'bg-violet-50 text-violet-600'
                                        : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    <span className={`${isActive ? 'text-violet-600' : 'text-gray-500'}`}>
                                        {item.icon}
                                    </span>
                                    <span className="flex-1">{item.label}</span>
                                    {item.badge && (
                                        <span className="px-1.5 py-0.5 text-[10px] font-medium bg-violet-100 text-violet-600 rounded">
                                            {item.badge}
                                        </span>
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            {/* Upgrade Banner */}
            <div className="p-3 border-t">
                <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700 mb-2">
                        Upgrade to a paid plan to unlock more features.
                    </p>
                    <button className="w-full bg-violet-600 text-white rounded px-3 py-1.5 text-sm font-medium hover:bg-violet-700">
                        Upgrade
                    </button>
                </div>
            </div>
        </div>
    );
}