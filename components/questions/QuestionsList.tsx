import QuestionCard from "./QuestionCard";
import Pagination from "../ui/Pagination";
import { QuestionList } from "@/types/Question";

type QuestionsListProps = {
    questions: QuestionList[];
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
                        {...q}
                    />
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
    );
};

export default QuestionsList;