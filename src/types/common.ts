export interface ListItemData {
    id: string;
    name: string;
    owner?: {
        initials: string;
        bgColor: string;
    };
    updated?: string;
    [key: string]: any;
}

export interface ListItemProps<T extends ListItemData> {
    item: T;
    isSelected: boolean;
    onSelect: (id: string) => void;
    showOwner?: boolean;
    showUpdated?: boolean;
    renderCustomContent?: (item: T) => React.ReactNode;
}