interface ListAvatarProps {
    initials: string;
    bgColor?: string;
    size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
    sm: 'w-6 h-6 text-[10px]',
    md: 'w-7 h-7 text-xs',
    lg: 'w-8 h-8 text-sm'
};

export default function ListAvatar({
    initials,
    bgColor = 'bg-emerald-500',
    size = 'md'
}: ListAvatarProps) {
    return (
        <div className={`${sizeClasses[size]} rounded-full ${bgColor} flex items-center justify-center text-white`}>
            {initials}
        </div>
    );
}