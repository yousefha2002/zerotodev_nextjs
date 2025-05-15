import Image from "next/image";
import Shadow from "../ui/Shadow";
import formatDate from "@/utils/formatDate";

type Props = {
    name: string;
    image: string;
    bio: string;
    points: number;
    jointAt: string;
};

export function UserHeader({ name, image, bio, points, jointAt }: Props) {
    return (
        <Shadow className="flex items-center gap-5 bg-white my-6 rounded-xl shadow-sm">
            <div className="relative w-20 h-20">
                <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${image}`}
                    alt={name}
                    fill
                    className="rounded-full object-cover border"
                />
            </div>
            <div className="space-y-1">
                <h1 className="text-xl font-bold">{name}</h1>
                <p className="text-sm text-muted-foreground">{bio || "لا يوجد نبذة"}</p>
                <div className="text-sm text-gray-600 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1">
                    <span>النقاط: <span className="font-semibold text-black">{points}</span></span>
                    <span className="hidden sm:inline">|</span>
                    <span>تاريخ الانضمام: <span className="font-medium text-black">{formatDate(jointAt)}</span></span>
                </div>
            </div>
        </Shadow>
    );
}