import Image from "next/image";
import Shadow from "../ui/Shadow";

type TopUserCardProps = {
    image: string;
    name: string;
    points: number;
};

const TopUserCard = ({ image, name, points }: TopUserCardProps) => {
    return (
        <Shadow className="bg-white text-center transform transition-all hover:scale-105 hover:shadow-xl">
            <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                    src={image}
                    alt={name}
                    width={96}
                    height={96}
                    className="rounded-full object-cover border-4 border-gradient-to-r from-blue-500 to-green-400"
                />
            </div>
            <h3 className="text-xl font-bold text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500 mt-2">نقاط: <span className="text-blue-600 font-semibold">{points}</span></p>
        </Shadow>
    );
};

export default TopUserCard;