import Image from "next/image";
import { FiMail } from "react-icons/fi";
import Shadow from "../ui/Shadow";
import { User } from "@/types/User";

export default function UserCard({user}:{user:User}) {
    return (
        <Shadow className="bg-white border border-gray-200 w-full">
            <div className="flex flex-col md:flex-row items-center gap-2">
                <div className="relative w-28 h-28">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${user.image}`}
                        alt={user.name}
                        fill
                        className="rounded-full object-contain"
                    />
                </div>

                <div className="text-center md:text-right">
                    <h2 className="text-2xl font-bold text-dark">{user.name}</h2>
                    <p className="text-muted mt-1">{user.bio}</p>

                    <div className="bg-light mt-4 p-3 rounded-lg shadow-sm flex items-center justify-center md:justify-start gap-x-2">
                        <FiMail className="text-dark text-lg" />
                        <span className="text-dark font-medium">{user.email}</span>
                    </div>
                </div>
            </div>
        </Shadow>
    );
}