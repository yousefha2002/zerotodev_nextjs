import Container from "@/components/ui/Container";
import QuizResult from "@/components/quizes/QuizResult";
import Shadow from "@/components/ui/Shadow";
import QuizStart from "@/components/quizes/QuizStart";
import { getViewQuiz } from "@/lib/quiz";

export default async function page({params}:{params:Promise<{id:string}>}) {

    const {id} = await params 
    const {quiz,marks,hasSubmitted} = await getViewQuiz(+id)
    const percentage = (marks / quiz.questionCount) * 100;

    return (
        <Container className="py-10">
            <Shadow className="bg-white text-center py-8 rounded-lg shadow-lg">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark mb-6">
                    {quiz.title}
                </h1>

                {hasSubmitted ? (
                    <QuizResult score={marks} total={quiz.questionCount} percentage={percentage} />
                ) : (
                    <QuizStart id={quiz.id}/>
                )}
            </Shadow>
        </Container>
    );
}