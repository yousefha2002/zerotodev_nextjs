import React from 'react'
import QuizCard from './QuizCard'
import Pagination from '../ui/Pagination'
import { QuizSummary } from '@/types/Quiz'

export default function QuizList({quizes,currentPage,totalPages}:{quizes:QuizSummary[],currentPage:number,totalPages:number}) {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
                {quizes.map((quiz) => (
                    <QuizCard key={quiz.id} {...quiz} />
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
    )
}
