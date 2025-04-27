import Image from "next/image";
import Shadow from "../ui/Shadow";

type PerformerCardProps = {
    name: string;
    points: number;
    image: string;
};

const PerformerCard = ({ name, points, image }: PerformerCardProps) => {
    return (
        <Shadow className="bg-white flex gap-x-2 items-center hover:shadow-xl transition-all transform hover:scale-105">
            <div className="flex-shrink-0">
                <Image
                    src={image}
                    alt={name}
                    width={60}
                    height={60}
                    className="rounded-full"
                />
            </div>
            <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <p className="text-sm text-muted">{points} نقاط</p>
            </div>
        </Shadow>
    );
};

export default PerformerCard;