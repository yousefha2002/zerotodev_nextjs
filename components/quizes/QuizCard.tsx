import { QuizSummary } from "@/types/Quiz";
import Link from "next/link";
import { FaQuestionCircle } from "react-icons/fa";

const QuizCard = ({ title, id, headline, questionCount }: QuizSummary) => {
    return (
        <Link href={`/quizzes/${id}`}>
            <div className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:scale-[1.03] cursor-pointer relative max-w-sm mx-auto overflow-hidden border border-gray-100 hover:border-primary/50">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-dark group-hover:text-primary transition-colors line-clamp-1">
                        {title}
                    </h3>
                    <div className="flex items-center gap-1 text-primary text-sm font-medium bg-primary/10 px-2 py-0.5 rounded-full">
                        <FaQuestionCircle className="text-sm" />
                        {questionCount}
                    </div>
                </div>

                <p className="text-muted text-sm leading-relaxed line-clamp-3">
                    {headline}
                </p>
            </div>
        </Link>
    );
};

export default QuizCard;