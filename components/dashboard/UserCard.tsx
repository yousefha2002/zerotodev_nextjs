import Image from "next/image";
import { FiMail } from "react-icons/fi";
import Shadow from "../ui/Shadow";

export default function UserCard() {
    const image = "/images/user.png";
    const name = "يوسف أبوهاني";
    const email = "yousef@example.com";
    const bio = "مطور ويب متخصص في بناء مواقع تفاعلية باستخدام React و Next.js.";

    return (
        <Shadow className="bg-white border border-gray-200 w-full">
            <div className="flex flex-col md:flex-row items-center gap-x-2">
                <div className="w-28 h-28 relative flex-shrink-0">
                <Image
                    src={image}
                    alt={name}
                    width={80} 
                    height={80}
                    className=""
                />
                </div>

                <div className="text-center md:text-right">
                    <h2 className="text-2xl font-bold text-dark">{name}</h2>
                    <p className="text-muted mt-1">{bio}</p>

                    <div className="bg-light mt-4 p-3 rounded-lg shadow-sm flex items-center justify-center md:justify-start gap-x-2">
                        <FiMail className="text-dark text-lg" />
                        <span className="text-dark font-medium">{email}</span>
                    </div>
                </div>
            </div>
        </Shadow>
    );
}