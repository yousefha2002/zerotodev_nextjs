import Link from "next/link";

type SidebarItem = {
    label: string;
    href: string;
};

type SidebarListProps = {
    items: SidebarItem[];
};

const SidebarList = ({ items }: SidebarListProps) => {
    return (
        <ul className="space-y-4 mt-6">
            {items.map((item) => (
                <li key={item.href}>
                    <Link href={item.href}>
                        <span className="text-primary hover:text-dark">{item.label}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SidebarList;