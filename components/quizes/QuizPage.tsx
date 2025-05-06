"use client";

import { submitAnswers } from "@/actions/user/submit-answer";
import QuizFooter from "@/components/quizes/QuizFooter";
import QuizHeader from "@/components/quizes/QuizHeader";
import QuizQuestion from "@/components/quizes/QuizQuestion";
import QuizResult from "@/components/quizes/QuizResult";
import { QuestionQuiz } from "@/types/QuestionQuiz";
import { useState } from "react";

export default function QuizPage({ questions ,quizId}: { questions: QuestionQuiz[],quizId:number }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [answers, setAnswers] = useState<number[]>([]);

    const currentQuestion = questions[currentQuestionIndex];

    const handleSelectAnswer = (answerId: number) => {
        setSelectedAnswer(answerId);
    };

    const handleNext = () => {
        if (selectedAnswer !== null) {
            const newAnswers = [...answers, selectedAnswer];
    
            const isCorrect = currentQuestion.answers.find(
                (ans) => ans.id === selectedAnswer && ans.isCorrect
            );
    
            if (isCorrect) {
                setScore((prev) => prev + 1);
            }
    
            if (currentQuestionIndex === questions.length - 1) {
                setAnswers(newAnswers);
                setQuizCompleted(true);
                submitAnswers(newAnswers, quizId);
            } else {
                setAnswers(newAnswers);
                setCurrentQuestionIndex((prev) => prev + 1);
                setSelectedAnswer(null);
            }
        }
    };    

    return (
        <>
            {quizCompleted ? (
                <QuizResult
                    score={score}
                    total={questions.length}
                    percentage={Math.round((score / questions.length) * 100)}
                />
            ) : (
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
            )}
        </>
    );
}