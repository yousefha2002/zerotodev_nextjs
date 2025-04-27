import Link from "next/link";

type LoginButtonProps = {
    loginLink: string;
};

export default function LoginButton({ loginLink }: LoginButtonProps) {
    return (
        <div className="hidden md:block">
            <Link
            href={loginLink}
            className="bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-accent transition"
            >
            دخول
            </Link>
        </div>
        );  
    }