import QuestionCard from "./QuestionCard";
import Pagination from "../articles/Pagination";

type Question = {
    id: number;
    question: string;
    details: string;
    views?: number;
    date?: string;
};

type QuestionsListProps = {
    questions: Question[];
    currentPage: number;
    totalPages: number;
};

const QuestionsList = ({ questions, currentPage, totalPages }: QuestionsListProps) => {
    return (
        <div>
            <div className="space-y-8">
                {questions.map((q) => (
                    <QuestionCard
                        key={q.id+"id"}
                        id={q.id}
                        question={q.question}
                        detail={q.details}
                        views={q.views}
                        date={q.date}
                    />
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
    );
};

export default QuestionsList;