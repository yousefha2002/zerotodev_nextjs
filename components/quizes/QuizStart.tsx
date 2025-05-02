import Link from 'next/link'
import React from 'react'

export default function QuizStart() {
    return (
        <div className="text-center">
            <p className="text-sm sm:text-lg text-muted mb-8">
                مرحبًا بك في الاختبار! اضغط على الزر أدناه لتقديم الإجابات.
            </p>
            <Link
                href={`/quizzes/1/questions`}
                className="bg-primary text-white py-3 px-8 rounded-lg font-semibold transition-transform transform hover:scale-105"
            >
                تقديم الإجابات
            </Link>
        </div>
    )
}
