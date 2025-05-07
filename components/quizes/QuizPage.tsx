"use client";
import { submitQuizAnswers } from "@/actions/user/submit-answer";
import QuizFooter from "@/components/quizes/QuizFooter";
import QuizHeader from "@/components/quizes/QuizHeader";
import QuizQuestion from "@/components/quizes/QuizQuestion";
import { QuestionQuiz } from "@/types/QuestionQuiz";
import { useState } from "react";

export default function QuizPage({ questions ,quizId}: { questions: QuestionQuiz[],quizId:number }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [answers, setAnswers] = useState<number[]>([]);

    const currentQuestion = questions[currentQuestionIndex];

    const handleSelectAnswer = (answerId: number) => {
        setSelectedAnswer(answerId);
    };

    const handleNext = () => {
        if (selectedAnswer !== null) {
            const newAnswers = [...answers, selectedAnswer];
    
            if (currentQuestionIndex === questions.length - 1) {
                setAnswers(newAnswers);
                submitQuizAnswers(newAnswers, quizId);
            } else {
                setAnswers(newAnswers);
                setCurrentQuestionIndex((prev) => prev + 1);
                setSelectedAnswer(null);
            }
        }
    };    

    return (
        <>
            <>
                <QuizHeader current={currentQuestionIndex + 1} total={questions.length} />
                <QuizQuestion
                    question={currentQuestion.title}
                    options={currentQuestion.answers}
                    selectedAnswer={selectedAnswer}
                    onSelect={handleSelectAnswer}
                />
                <QuizFooter
                    isLastQuestion={currentQuestionIndex === questions.length - 1}
                    disabled={selectedAnswer === null}
                    onNext={handleNext}
                />
            </>
        </>
    );
}