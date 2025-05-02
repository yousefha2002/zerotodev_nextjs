import Container from "@/components/ui/Container";
import QuizResult from "@/components/quizes/QuizResult";
import Shadow from "@/components/ui/Shadow";
import QuizStart from "@/components/quizes/QuizStart";

export default function QuizPage() {
    const hasSubmitted = false;
    const score = 6;
    const totalQuestions = 10;
    const percentage = (score / totalQuestions) * 100;

    return (
        <Container className="py-10">
            <Shadow className="bg-white text-center py-8 rounded-lg shadow-lg">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark mb-6">
                    اختبار الثقافة العامة
                </h1>

                {hasSubmitted ? (
                    <QuizResult score={score} total={totalQuestions} percentage={percentage} />
                ) : (
                    <QuizStart/>
                )}
            </Shadow>
        </Container>
    );
}