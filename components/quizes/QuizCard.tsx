import Link from "next/link";
import { FaQuestionCircle } from "react-icons/fa"; // Importing React icons

type Quiz = {
    id: number;
    title: string;
    description: string;
    numberOfQuestions: number;
    slug: string;
};

const QuizCard = ({ title, description, numberOfQuestions, slug }: Quiz) => {
    return (
        <Link href={`/quizzes/${slug}`}>
            <div className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer relative max-w-sm mx-auto overflow-hidden">
                <h3 className="text-xl font-bold text-dark mb-3">
                    {title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-3">
                    {description}
                </p>
                <div className="flex justify-between items-center mb-4 text-sm text-muted">
                    <div className="flex items-center gap-x-2">
                        <FaQuestionCircle className=" text-primary" />
                        <span>{numberOfQuestions} أسئلة</span>
                    </div>
                </div>
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg opacity-0 hover:opacity-30 transition-all duration-300"></div>
            </div>
        </Link>
    );
};

export default QuizCard;
