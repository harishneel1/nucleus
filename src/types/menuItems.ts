import { LucideProps } from "lucide-react";

export default interface MenuItem {
    label: string;
    action: () => void;
    isDanger?: boolean;
    separator?: boolean;
    icon?: React.ComponentType<LucideProps>;
}
