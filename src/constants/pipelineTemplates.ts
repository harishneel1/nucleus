// constants/pipelineTemplates.ts
import { Antenna } from 'lucide-react';

export const templates = [
    {
        id: '1',
        title: 'Simple chatbot Template',
        description: 'Simple chatbot with openAI LLM.',
        icon: Antenna,
        categories: ['chatbots', 'basic'],
        createdBy: 'alm3455'
    },
    {
        id: '2',
        title: 'Search a document Template',
        description: 'Allows you to upload a file and ask questions in natural language about the file.',
        icon: Antenna,
        categories: ['search', 'basic'],
        createdBy: 'alm3455'
    },
    {
        id: '3',
        title: 'Search a knowledge base Template',
        description: 'Ask a question about a centralized knowledge base that can contain documents, websites, videos, or live-synced integration.',
        icon: Antenna,
        categories: ['search', 'basic'],
        createdBy: 'alm3455'
    },
];