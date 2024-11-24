import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

export default function DropdownMenuItem({
    children,
    className = '',
    ...props
}: DropdownMenuPrimitive.DropdownMenuItemProps) {
    return (
        <DropdownMenuPrimitive.Item
            className={`relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 ${className}`}
            {...props}
        >
            {children}
        </DropdownMenuPrimitive.Item>
    )
}