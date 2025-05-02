import Image from "next/image";
import Link from "next/link";
import { FaEye, FaCalendarAlt } from "react-icons/fa";
import Shadow from "../ui/Shadow";
import Label from "../ui/Label";
import { ArticleList } from "@/types/Article";
import formatDate from "@/utils/formatDate";

const ArticleCard = ({ id, title, image, category, headline,publish_date,views }: ArticleList) => {
    return (
        <Shadow className="hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 bg-white">
            <Image
                width={300}
                height={200}
                src={`${process.env.ImageUrl}${image}`}
                alt={title}
                className="w-full h-48 object-cover rounded-lg mb-6"
            />

            <Link href={`/articles/${id}`} passHref>
                <h3 className="text-2xl font-bold text-dark mb-3 cursor-pointer hover:text-primary transition duration-300 ease-in-out">
                    {title}
                </h3>
            </Link>

            <p className="text-muted text-sm mb-4 line-clamp-3">{headline}</p>

            <Label {...category}/>
            
            <div className="mt-4 flex justify-between items-center text-sm text-muted">
                <div className="flex items-center gap-x-1">
                    <FaEye className="text-muted" />
                    <span>{views}</span>
                </div>

                <div className="flex items-center gap-x-1">
                    <FaCalendarAlt className="text-muted" />
                    <span>{formatDate(publish_date)}</span>
                </div>
            </div>
        </Shadow>
    );
};

export default ArticleCard;