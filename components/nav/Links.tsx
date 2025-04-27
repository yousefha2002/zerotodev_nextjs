import Link from "next/link";

type LinkProps = {
    navLinks: { title: string; href: string }[];
    className?: string;
};

export default function Links({navLinks,className}:LinkProps) {
    return (
        <div className={className}>
            {navLinks.map((link) => (
            <Link
                key={link.title}
                href={link.href}
                className="text-dark hover:text-primary font-medium transition"
            >
                {link.title}
            </Link>
            ))}
        </div>
    )
}