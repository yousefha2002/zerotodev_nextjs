import { ReactNode } from "react";

type TitleProps = {
    title: string;
    icon: ReactNode;
    className?: string;
};

export default function SidebarTitle({ icon, title, className }: TitleProps) {
    return (
        <div className="border-b border-gray-200 pb-4 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-[60px] after:h-[2px] after:bg-primary">
            <h3 className={`text-lg font-semibold text-gray-800 flex items-center gap-2 ${className}`}>
                <span className="text-primary">{icon}</span>
                <span>{title}</span>
            </h3>
        </div>
    );
}