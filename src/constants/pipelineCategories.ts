// constants/pipelineCategories.ts
import {
    LayoutGrid,
    Search,
    Star,
    MessageSquare,
    Briefcase,
    FileEdit,
    Mail,
    Archive,
    MessageCircle,
    FileBox
} from 'lucide-react';
import { Category } from '@/types/pipeline';

export const pipelineCategories: Category[] = [
    {
        id: 'basic',
        label: 'Basic',
        icon: LayoutGrid
    },
    {
        id: 'search',
        label: 'Search',
        icon: Search
    },
    {
        id: 'assistants',
        label: 'Assistants',
        icon: Star
    },
    {
        id: 'chatbots',
        label: 'Chatbots',
        icon: MessageSquare
    },
    {
        id: 'productivity',
        label: 'Productivity',
        icon: Briefcase
    },
    {
        id: 'content-creation',
        label: 'Content Creation',
        icon: FileEdit
    },
    {
        id: 'gmail',
        label: 'Gmail',
        icon: Mail
    },
    {
        id: 'google-drive',
        label: 'Google Drive',
        icon: Archive
    },
    {
        id: 'slack',
        label: 'Slack',
        icon: MessageCircle
    },
    {
        id: 'discord',
        label: 'Discord',
        icon: FileBox
    }
];