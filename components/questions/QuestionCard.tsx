import Link from "next/link";
import { FaEye, FaCalendarAlt } from "react-icons/fa";
import Shadow from "../ui/Shadow";
import { QuestionList } from "@/types/Question";
import formatDate from "@/utils/formatDate";

const QuestionCard = ({id,title,headline,views = 0,publish_date,}: QuestionList) => {
    return (
        <Shadow className="bg-white rounded-lg border-t-4 border-primary/70 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] p-5">
        <Link href={`/questions/${id}`}>
            <h3 className="text-lg font-bold text-gray-800 hover:text-primary transition-colors line-clamp-1">
            {title}
            </h3>
        </Link>

        <p className="text-sm text-gray-600 mt-2 line-clamp-2 leading-relaxed">
            {headline}
        </p>

        <div className="mt-4 flex justify-between items-center text-xs text-gray-500 border-t pt-3">
            <div className="flex items-center gap-x-1">
            <FaEye className="text-gray-400" />
            <span>{views}</span>
            </div>

            <div className="flex items-center gap-x-1">
            <FaCalendarAlt className="text-gray-400" />
            <span>{formatDate(publish_date)}</span>
            </div>
        </div>
        </Shadow>
    );
};
export default QuestionCard;