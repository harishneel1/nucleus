import { ListItemData } from '@/types/common';
import ListItem from './ListItem';

interface ListProps<T extends ListItemData> {
    items: T[];
    selectedItems: string[];
    onSelectItem: (id: string) => void;
    showOwner?: boolean;
    showUpdated?: boolean;
    renderCustomContent?: (item: T) => React.ReactNode;
}

export function List<T extends ListItemData>({
    items,
    selectedItems,
    onSelectItem,
    showOwner,
    showUpdated,
    renderCustomContent
}: ListProps<T>) {
    return (
        <div className="divide-y">
            {items.map((item) => (
                <ListItem
                    key={item.id}
                    item={item}
                    isSelected={selectedItems.includes(item.id)}
                    onSelect={onSelectItem}
                    showOwner={showOwner}
                    showUpdated={showUpdated}
                    renderCustomContent={renderCustomContent}
                />
            ))}
        </div>
    );
}