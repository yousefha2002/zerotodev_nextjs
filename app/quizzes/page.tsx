import QuizCard from "@/components/quizes/QuizCard";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import quizes from "@/data/fake/quizes";

export default function QuizzesPage() {
    return (
        <Container className="py-12">
            <SectionTitle
                title="اختبر مهاراتك البرمجية"
                subtitle="اكتشف مجموعة من التحديات البرمجية لاختبار مهاراتك في مختلف المجالات."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
                {quizes.map((quiz) => (
                    <QuizCard key={quiz.id} {...quiz} />
                ))}
            </div>
        </Container>
    );
}