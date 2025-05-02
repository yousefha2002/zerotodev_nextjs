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
        <Shadow className="bg-white hover:shadow-2xl transition-transform transform hover:scale-105 duration-300">
            <div className="relative">
                <Image
                    src={`${process.env.ImageUrl}${image}`}
                    alt={title}
                    width={192}
                    height={192}
                    className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black opacity-25 rounded-t-lg"></div>
            </div>
            <h3 className="mt-6 text-xl font-semibold text-center text-gray-800 hover:text-primary transition-colors">
                <Link href={link}>{title}</Link>
            </h3>
        </Shadow>
    );
};
export default Card;