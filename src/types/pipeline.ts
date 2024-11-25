export interface Category {
    id: string;
    label: string;
    icon: React.ComponentType<LucideProps>;
}

export interface Template {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    categories: string[];
    createdBy: string;
}