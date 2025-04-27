import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import QuestionCard from "./QuestionCard";

type Question = {
    id: number;
    question: string;
};

type QuestionsSectionProps = {
    questions: Question[];
};

const QuestionsSection = ({ questions}: QuestionsSectionProps) => {
    return (
        <section className="py-20 bg-gray-50">
        <Container>
            <SectionTitle
                title="أسئلة منوعة من قسم الأسئلة"
                subtitle="أفضل الأسئلة الشائعة التي قد تهمك"
                align="center"
            />

            <div className="space-y-4">
                {questions.map((q) => (
                    <QuestionCard key={q.id} id={q.id} question={q.question} />
                ))}
            </div>
        </Container>
        </section>
    );
};
export default QuestionsSection;