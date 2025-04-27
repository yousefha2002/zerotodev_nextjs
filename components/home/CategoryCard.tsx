import Link from "next/link";
import { ReactNode } from "react";
import Shadow from "../ui/Shadow";

interface CategoryCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    href: string;
}

export default function CategoryCard({ icon, title, description, href }: CategoryCardProps) {
    return (
        <Link href={href}>
            <Shadow className="bg-white flex flex-col items-start gap-4 hover:shadow-xl transition">
                <div className="text-4xl">{icon}</div>
                <h3 className="text-xl font-semibold text-dark">{title}</h3>
                <p className="text-muted text-sm min-h-10">{description}</p>
            </Shadow>
        </Link>
    );
}