import { ContentList } from "@/types/ContentList";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import QuestionCard from "./QuestionCard";

const QuestionsSection = ({ questions}: {questions:ContentList[]}) => {
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
                    <QuestionCard key={q.id} id={q.id} title={q.title} />
                ))}
            </div>
        </Container>
        </section>
    );
};
export default QuestionsSection;