import { ReactNode } from "react";

type TitleProps = {
    title: string;
    icon: ReactNode;
    className?: string;
};

export default function SidebarTitle({ icon, title, className }: TitleProps) {
    return (
        <div
            className={`
                border-b border-[#ccc] pb-5 relative
                after:content-[''] after:absolute after:bottom-0 after:right-0 
                after:w-[80px] after:h-[1px] after:bg-primary
            `}
        >
            <h3 className={`text-dark flex items-center gap-x-2 text-[18px] font-semibold ${className}`}>
                {icon}
                <span className="relative">{title}</span>
            </h3>
        </div>
    );
}