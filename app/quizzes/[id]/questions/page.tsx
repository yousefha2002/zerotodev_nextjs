import QuizPage from '@/components/quizes/QuizPage'
import Container from '@/components/ui/Container'
import NotFoundText from '@/components/ui/NotFoundText'
import Shadow from '@/components/ui/Shadow'
import { getQuizWithQuestions } from '@/lib/quiz'
import React from 'react'

export default async function page({params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    const quiz = await getQuizWithQuestions(+id)

    return (
        <Container className="my-8">
            <Shadow className="bg-white">
                {
                    quiz.questions.length>0?
                    <QuizPage questions={quiz.questions} quizId={quiz.id}/>
                    :
                    <NotFoundText/>
                }
            </Shadow>
        </Container>
    )
}