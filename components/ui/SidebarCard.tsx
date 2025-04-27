import { ReactNode } from "react";
import Shadow from "./Shadow";
import SidebarTitle from "./SidebarTitle";

type SidebarCardProps = {
    title: string;
    icon: ReactNode;
    children: ReactNode;
};

const SidebarCard = ({ title, icon, children }: SidebarCardProps) => {
    return (
        <Shadow className="bg-white">
            <SidebarTitle title={title} icon={icon} />
            {children}
        </Shadow>
    );
};
export default SidebarCard;