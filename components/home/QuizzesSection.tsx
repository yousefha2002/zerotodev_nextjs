import Card from "../ui/Card";
import { Article } from "@/types/Article";
import ContentSection from "./ContentSection";

type QuizzesSectionProps = {
    quizzes: Article[];
};

const QuizzesSection = ({ quizzes }: QuizzesSectionProps) => {
    return (
        <ContentSection
            title="أحدث الكويزات"
            subtitle="اختبر مهاراتك البرمجية من خلال هذه الكويزات"
            data={quizzes}
            renderItem={(quiz) => (
                <Card
                    key={quiz.id}
                    image={quiz.image}
                    title={quiz.title}
                    link={`/quizzes/${quiz.id}`}
                />
            )}
        />
    );
};
export default QuizzesSection;