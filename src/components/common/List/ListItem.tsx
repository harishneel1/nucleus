import { ListItemData, ListItemProps } from "@/types/common";
import ListAvatar from "./ListAvatar";
import { MoreHorizontal } from "lucide-react";
import { useRouter } from 'next/navigation';
import DropdownMenu from "../DropDown/DropDownMenu";
import { pipelineMenuItems } from "@/constants/MenuItems";
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import React from "react";

export default function ListItem<T extends ListItemData>({
    item,
    isSelected,
    onSelect,
    showOwner = true,
    showUpdated = true,
    renderCustomContent
}: ListItemProps<T>) {

    const router = useRouter();

    const handleItemClick = (e: React.MouseEvent) => {
        onSelect(item.id);
    };

    const handleDoubleClick = (e: React.MouseEvent) => {
        router.push(`/pipelines/${item.id}`);
    };

    const handleMenuClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent row selection
    };

    return (
        <div
            className={`
                flex items-center px-4 py-2 
                transition-colors duration-100 ease-in-out
                ${isSelected ? 'bg-violet-100' : 'hover:bg-violet-50/60'}
                group
            `}
            onClick={handleItemClick}
            onDoubleClick={handleDoubleClick}
        >
            <div className="flex items-center flex-1">
                <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 
                             text-violet-600 focus:ring-violet-500
                             transition-colors duration-100 mr-4"
                    checked={isSelected}
                    onChange={() => onSelect(item.id)}
                />
                <span className="text-sm text-gray-900">
                    {item.name}
                </span>
            </div>

            {renderCustomContent && renderCustomContent(item)}

            {showOwner && item.owner && (
                <div className="w-32 flex items-center pl-2">
                    <ListAvatar
                        initials={item.owner.initials}
                        bgColor={item.owner.bgColor}
                    />
                </div>
            )}

            {showUpdated && item.updated && (
                <div className="w-32 pl-2">
                    <div className="w-32 text-sm text-gray-600">
                        {item.updated}
                    </div>
                </div>
            )}
            <div className="relative">

                {/* We'll need to implement the dropdown menu separately */}
            </div>
            <DropdownMenu
                trigger={
                    <button
                        onClick={(e) => e.stopPropagation()}
                        className="p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-gray-100 rounded ml-2"
                    >
                        <MoreHorizontal className="w-4 h-4 text-gray-500" />
                    </button>
                }
            >
                {pipelineMenuItems.map((item, index) => (
                    item.separator ? (
                        <DropdownMenuPrimitive.Separator
                            key={`sep-${index}`}
                            className="my-1 h-px bg-gray-200"
                        />
                    ) : (
                        <DropdownMenuPrimitive.Item
                            key={item.label}
                            onSelect={item.action}
                            className={`
        relative flex cursor-pointer select-none items-center 
        rounded-sm px-2 py-1.5 text-sm outline-none 
        transition-colors hover:bg-gray-100 focus:bg-gray-100
        ${item.isDanger ? 'text-red-600' : ''}
    `}
                        >
                            {item.icon && React.createElement(item.icon, {
                                className: "w-4 h-4 mr-2 "
                            })}
                            {item.label}
                        </DropdownMenuPrimitive.Item>
                    )
                ))}
            </DropdownMenu>
        </div>
    );
}