import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
    brandName: string;
    logoSrc: string;
};

export default function Logo({ brandName, logoSrc }: LogoProps) {
    return (
        <Link href={`/`} className="flex items-center space-x-3">
            <Image src={logoSrc} alt="Logo" width={50} height={50} />
            <span className="text-primary text-xl font-semibold tracking-wide">
                {brandName}
            </span>
        </Link>
    );
}