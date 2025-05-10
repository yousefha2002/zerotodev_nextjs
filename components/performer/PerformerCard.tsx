import Image from "next/image";
import Shadow from "../ui/Shadow";
import { TopUser } from "@/types/User";


const PerformerCard = ({user }: {user:TopUser}) => {
    return (
        <Shadow className="bg-white flex gap-x-4 items-center hover:shadow-xl transition-all transform hover:scale-105">
            <div className="relative w-16 h-16">
                <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${user.image}`}
                    alt={user.name}
                    fill
                    className="rounded-full object-contain"
                />
            </div>
            <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
                <p className="text-sm text-muted">{user.points} نقاط</p>
            </div>
        </Shadow>
    );
};

export default PerformerCard;