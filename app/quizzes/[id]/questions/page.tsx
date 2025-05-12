import QuizPage from '@/components/quizes/QuizPage'
import Container from '@/components/ui/Container'
import NotFoundText from '@/components/ui/NotFoundText'
import Shadow from '@/components/ui/Shadow'
import { getQuizWithQuestions, getViewQuiz } from '@/lib/quiz'
import { projectName } from '@/utils/constants'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const {id} = await params
    const quiz = await getViewQuiz(+id);
    return {
        title: `${quiz.quiz.title} | ${projectName}`,
        description: quiz.quiz.headline,
}}

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