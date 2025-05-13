import Link from "next/link";
import LogoutButton from "./Logout";

type AuthButtonProps = {
    token?: string;
};

export default function AuthButton({ token }: AuthButtonProps) {
    return (
        <div className="hidden md:block">
            {token ? (
                <div className="flex gap-x-2">
                    <Link href="/dashboard" className="text-primary px-4 py-2 rounded-lg border-primary border-2">
                        لوحة تحكم
                    </Link>
                    <LogoutButton/>
                </div>
            ) : (
                <Link
                    href={'/login'}
                    className="bg-primary text-white px-4 py-2 rounded-lg shadow"
                >
                    دخول
                </Link>
            )}
        </div>
    );
}