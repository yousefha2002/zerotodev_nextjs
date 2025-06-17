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
        <ul className="space-y-3 mt-5">
            {items.map((item) => (
                <li key={item.href}>
                    <Link href={item.href}>
                        <span className="block text-sm text-gray-700 hover:text-primary transition-colors hover:underline cursor-pointer">
                            {item.label}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default SidebarList;