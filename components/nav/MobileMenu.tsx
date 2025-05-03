import Link from 'next/link';
import Links from './Links';
import LogoutButton from './Logout';

type MobileMenuProps = {
    navLinks: { title: string; href: string }[];
    loginLink: string;
    token?: string;
};

export default function MobileMenu({ navLinks, loginLink, token }: MobileMenuProps) {
    return (
        <div className="md:hidden bg-white border-t">
            <div className="flex flex-col px-4 py-2 space-y-2">
                <Links navLinks={navLinks} className="flex flex-col space-y-2" />
                {token ? (
                    <div className="flex flex-col space-y-2">
                        <Link
                            href="/dashboard"
                            className="bg-primary text-white px-4 py-2 rounded-lg text-center shadow hover:bg-dark"
                        >
                            داشبورد
                        </Link>
                        <LogoutButton/>
                    </div>
                ) : (
                    <Link
                        href={loginLink}
                        className="mt-2 bg-primary text-white px-4 py-2 rounded-lg text-center shadow hover:bg-accent transition"
                    >
                        دخول
                    </Link>
                )}
            </div>
        </div>
    );
}