import MenuItem from '@/types/menuItems';
import {
    type LucideIcon,
    type LucideProps,
    Pencil,         // Rename
    Edit2,          // Edit
    Play,           // Run
    Copy,           // Duplicate
    Webhook,        // API
    Upload,         // Publish
    FolderInput,    // Move
    Trash2,         // Delete
    Hash,           // Copy ID
    Share2          // Share
} from 'lucide-react';

export const pipelineMenuItems: MenuItem[] = [
    {
        label: 'Rename',
        action: () => console.log('rename'),
        icon: Pencil  // Pass the icon component, not JSX
    },
    {
        label: 'Edit',
        action: () => console.log('edit'),
        icon: Edit2
    },
    {
        label: 'Run',
        action: () => console.log('run'),
        icon: Play
    },
    {
        label: 'Duplicate',
        action: () => console.log('duplicate'),
        icon: Copy
    },
    {
        label: 'API',
        action: () => console.log('api'),
        icon: Webhook
    },
    {
        label: 'Publish',
        action: () => console.log('publish'),
        icon: Upload
    },
    { separator: true },
    {
        label: 'Move',
        action: () => console.log('move'),
        icon: FolderInput
    },
    {
        label: 'Delete',
        action: () => console.log('delete'),
        isDanger: true,
        icon: Trash2
    },
    { separator: true },
    {
        label: 'Copy ID',
        action: () => console.log('copyId'),
        icon: Hash
    },
    {
        label: 'Share',
        action: () => console.log('share'),
        icon: Share2
    }
];