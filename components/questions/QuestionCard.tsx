import Link from "next/link";
import { FaEye, FaCalendarAlt } from "react-icons/fa";
import Shadow from "../ui/Shadow";

type Question = {
    id: number;
    question: string;
    detail: string;
    views?: number;
    date?: string;
};

const QuestionCard = ({ id, question, detail, views = 0, date = "2025-04-25" }: Question) => {
    return (
        <Shadow className="bg-white hover:shadow-md transition-all duration-200 ease-in-out transform hover:scale-[1.02] p-4">
            <Link href={`/questions/${id}`}>
                <h3 className="text-base font-semibold text-dark mb-2 cursor-pointer hover:text-primary transition duration-200">
                    {question}
                </h3>
            </Link>

            <p className="text-muted text-xs mb-3 line-clamp-3 leading-relaxed">{detail}</p>

            <div className="mt-3 flex justify-between items-center text-xs text-muted">
                <div className="flex items-center gap-x-1">
                    <FaEye className="text-muted text-[12px]" />
                    <span>{views}</span>
                </div>

                <div className="flex items-center gap-x-1">
                    <FaCalendarAlt className="text-muted text-[12px]" />
                    <span>{date}</span>
                </div>
            </div>
        </Shadow>
    );
};

export default QuestionCard;