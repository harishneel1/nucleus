// components/layout/Sidebar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppSelector } from '@/lib/store/hooks';
import * as Tooltip from '@radix-ui/react-tooltip';

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
    const isSidebarCollapsed = useAppSelector((state) => state.ui.isSidebarCollapsed);

    return (
        <Tooltip.Provider delayDuration={150}>
            <div className={`
                flex flex-col h-full
                transition-all duration-300 ease-in-out
                ${isSidebarCollapsed ? 'w-[72px]' : 'w-60'}
            `}>
                {/* Workspace Selector */}
                <div className="p-3 border-b">
                    <div className={`
                        flex items-center 
                        ${isSidebarCollapsed ? 'justify-center' : 'justify-between'}
                    `}>
                        {isSidebarCollapsed ? (
                            <Tooltip.Root>
                                <Tooltip.Trigger asChild>
                                    <div className="w-6 h-6 bg-violet-600 rounded flex items-center justify-center text-white text-sm flex-shrink-0">
                                        VS
                                    </div>
                                </Tooltip.Trigger>
                                <Tooltip.Portal>
                                    <Tooltip.Content
                                        className="px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded shadow-md animate-in fade-in-0 zoom-in-95"
                                        sideOffset={5}
                                    >
                                        Personal Workspace
                                        <Tooltip.Arrow className="fill-gray-800" />
                                    </Tooltip.Content>
                                </Tooltip.Portal>
                            </Tooltip.Root>
                        ) : (
                            <>
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 bg-violet-600 rounded flex items-center justify-center text-white text-sm flex-shrink-0">
                                        VS
                                    </div>
                                    <span className="text-sm font-medium transition-opacity duration-300">
                                        Personal
                                    </span>
                                </div>
                                <div className="flex items-center gap-1 transition-opacity duration-300">
                                    <button
                                        onClick={() => setWorkspaceExpanded(!workspaceExpanded)}
                                        className="p-1 hover:bg-gray-100 rounded"
                                    >
                                        <ChevronDown
                                            className={`
                                                w-4 h-4 text-gray-600 transition-transform
                                                ${workspaceExpanded ? 'transform rotate-180' : ''}
                                            `}
                                        />
                                    </button>
                                    <button className="p-1 hover:bg-gray-100 rounded">
                                        <Plus className="w-4 h-4 text-gray-600" />
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto p-2">
                    <ul className="space-y-1">
                        {navItems.map((item) => {
                            const isActive = pathname.startsWith(item.href);

                            if (isSidebarCollapsed) {
                                return (
                                    <li key={item.href}>
                                        <Tooltip.Root>
                                            <Tooltip.Trigger asChild>
                                                <Link
                                                    href={item.href}
                                                    className={`
                                                        flex items-center justify-center p-2 rounded-md
                                                        transition-all duration-300 ease-in-out group
                                                        ${isActive ? 'bg-violet-50' : 'hover:bg-gray-100'}
                                                    `}
                                                >
                                                    <span className={`
                                                        flex-shrink-0 transition-transform
                                                        group-hover:scale-110 duration-200
                                                        ${isActive ? 'text-violet-600' : 'text-gray-500'}
                                                    `}>
                                                        {item.icon}
                                                    </span>
                                                </Link>
                                            </Tooltip.Trigger>
                                            <Tooltip.Portal>
                                                <Tooltip.Content
                                                    className="px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded shadow-md animate-in fade-in-0 zoom-in-95"
                                                    sideOffset={5}
                                                >
                                                    {item.label}
                                                    {item.badge && (
                                                        <span className="ml-1 px-1 py-0.5 bg-violet-500 rounded-sm">
                                                            {item.badge}
                                                        </span>
                                                    )}
                                                    <Tooltip.Arrow className="fill-gray-800" />
                                                </Tooltip.Content>
                                            </Tooltip.Portal>
                                        </Tooltip.Root>
                                    </li>
                                );
                            }

                            return (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`
                                            flex items-center gap-2 px-2 py-1.5 rounded-md text-sm
                                            transition-all duration-300 ease-in-out
                                            ${isActive ? 'bg-violet-50 text-violet-600' : 'text-gray-700 hover:bg-gray-100'}
                                        `}
                                    >
                                        <span className={`
                                            flex-shrink-0
                                            ${isActive ? 'text-violet-600' : 'text-gray-500'}
                                        `}>
                                            {item.icon}
                                        </span>
                                        <span className="flex-1 transition-opacity duration-300">
                                            {item.label}
                                        </span>
                                        {item.badge && (
                                            <span className="px-1.5 py-0.5 text-[10px] font-medium bg-violet-100 text-violet-600 rounded transition-opacity duration-300">
                                                {item.badge}
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Upgrade Banner - remains the same */}
                {!isSidebarCollapsed && (
                    <div className="p-3 border-t transition-opacity duration-300">
                        <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-sm text-gray-700 mb-2">
                                Upgrade to a paid plan to unlock more features.
                            </p>
                            <button className="w-full bg-violet-600 text-white rounded px-3 py-1.5 text-sm font-medium hover:bg-violet-700">
                                Upgrade
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </Tooltip.Provider>
    );
}