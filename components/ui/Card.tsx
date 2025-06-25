import Image from "next/image";
import Link from "next/link";
import Shadow from "./Shadow";

type CardProps = {
    image: string;
    title: string;
    link: string;
};

const Card = ({ image, title, link }: CardProps) => {
    return (
        <Shadow className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.03]">
            <div className="relative w-full h-44 sm:h-48">
                <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${image}`}
                    alt={title}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/25" />
            </div>
            <div className="p-3 text-center">
                <Link href={link}>
                    <h3 className="text-sm sm:text-base font-medium text-gray-800 hover:text-primary transition-colors duration-200">
                        {title}
                    </h3>
                </Link>
            </div>
        </Shadow>
    );
};

export default Card;