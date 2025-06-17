import Image from "next/image";
import Link from "next/link";
import { FaEye, FaCalendarAlt } from "react-icons/fa";
import Shadow from "../ui/Shadow";
import Label from "../ui/Label";
import { ArticleList } from "@/types/Article";
import formatDate from "@/utils/formatDate";

const ArticleCard = ({id,title,image,category,headline,publish_date,views,}: ArticleList) => {
    return (
        <Shadow className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]">
        <div className="relative">
            <Image
            width={300}
            height={200}
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${image}`}
            alt={title}
            className="w-full h-52 object-cover"
            />
            <div className="absolute top-2 left-2">
            <Label {...category} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        <div className="p-5">
            <Link href={`/articles/${id}`}>
            <h3 className="text-xl font-bold text-gray-800 hover:text-primary transition-colors line-clamp-1">
                {title}
            </h3>
            </Link>

            <p className="text-gray-600 text-sm mt-2 line-clamp-3 leading-relaxed">
            {headline}
            </p>

            <div className="mt-4 flex justify-between items-center text-sm text-gray-500 border-t pt-3">
            <div className="flex items-center gap-1">
                <FaEye />
                <span>{views}</span>
            </div>
            <div className="flex items-center gap-1">
                <FaCalendarAlt />
                <span>{formatDate(publish_date)}</span>
            </div>
            </div>
        </div>
        </Shadow>
    );
};
export default ArticleCard;