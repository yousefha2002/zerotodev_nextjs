import React from 'react'
import QuizCard from './QuizCard'
import Pagination from '../ui/Pagination'
import { QuizSummary } from '@/types/Quiz'
import GoogleAd from '../GoogleAd'

export default function QuizList({ quizes, currentPage, totalPages }: { quizes: QuizSummary[], currentPage: number, totalPages: number }) {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
                {quizes.map((quiz, index) => (
                    <React.Fragment key={quiz.id}>
                        <QuizCard {...quiz} />
                        {index === 5 && (
                            <div className="col-span-full">
                                <GoogleAd slot="1234567893" marginClass="my-4" />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </>
    )
}