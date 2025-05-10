import { QuizSummary } from "@/types/Quiz";
import Link from "next/link";
import { FaQuestionCircle } from "react-icons/fa";

const QuizCard = ({ title, id, headline,questionCount }: QuizSummary) => {
    return (
        <Link href={`/quizzes/${id}`}>
            <div className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer relative max-w-sm mx-auto overflow-hidden">
                <h3 className="text-xl font-bold text-dark mb-3 line-clamp-1">
                    {title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-3">
                    {headline}
                </p>
                <div className="flex justify-between items-center mb-4 text-sm text-muted">
                    <div className="flex items-center gap-x-2">
                        <FaQuestionCircle className=" text-primary" />
                        <span>{questionCount} أسئلة</span>
                    </div>
                </div>
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg opacity-0 hover:opacity-30 transition-all duration-300"></div>
            </div>
        </Link>
    );
};

export default QuizCard;
