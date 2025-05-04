import Link from "next/link";
import { FaEye, FaCalendarAlt } from "react-icons/fa";
import Shadow from "../ui/Shadow";
import { QuestionList } from "@/types/Question";
import formatDate from "@/utils/formatDate";

const QuestionCard = ({ id, title, headline, views = 0, publish_date}: QuestionList) => {
    return (
        <Shadow className="bg-white hover:shadow-md transition-all duration-200 ease-in-out transform hover:scale-[1.02] p-4">
            <Link href={`/questions/${id}`}>
                <h3 className="text-base font-semibold text-dark mb-2 cursor-pointer hover:text-primary transition duration-200">
                    {title}
                </h3>
            </Link>

            <p className="text-muted text-xs mb-3 line-clamp-3 leading-relaxed">{headline}</p>

            <div className="mt-3 flex justify-between items-center text-xs text-muted">
                <div className="flex items-center gap-x-1">
                    <FaEye className="text-muted text-[12px]" />
                    <span>{views}</span>
                </div>

                <div className="flex items-center gap-x-1">
                    <FaCalendarAlt className="text-muted text-[12px]" />
                    <span>{formatDate(publish_date)}</span>
                </div>
            </div>
        </Shadow>
    );
};

export default QuestionCard;