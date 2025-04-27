import Links from './Links';

type DesktopLinksProps = {
    navLinks: { title: string; href: string }[];
};

export default function DesktopLinks({ navLinks }: DesktopLinksProps) {
    return (
        <div className="hidden md:flex space-x-6 rtl:space-x-reverse">
            <Links navLinks={navLinks} className="flex space-x-6 rtl:space-x-reverse" />
        </div>
    );
}
