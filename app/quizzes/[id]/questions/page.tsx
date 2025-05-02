"use client";

import QuizFooter from "@/components/quizes/QuizFooter";
import QuizHeader from "@/components/quizes/QuizHeader";
import QuizQuestion from "@/components/quizes/QuizQuestion";
import QuizResult from "@/components/quizes/QuizResult";
import Container from "@/components/ui/Container";
import Shadow from "@/components/ui/Shadow";
import questionslist from "@/data/fake/questionslist";
import { useState } from "react";

export default function QuizPage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const currentQuestion = questionslist[currentQuestionIndex];

    const handleSelectAnswer = (answer: string) => {
        setSelectedAnswer(answer);
    };

    const handleNext = () => {
        if (selectedAnswer === currentQuestion.correctAnswer) {
            setScore((prev) => prev + 1);
        }
        if (currentQuestionIndex === questionslist.length - 1) {
            setQuizCompleted(true);
        } else {
            setCurrentQuestionIndex((prev) => prev + 1);
            setSelectedAnswer(null);
        }
    };

    return (
        <Container className="my-8">
          <Shadow className="bg-white">
            {quizCompleted ? (
                <QuizResult
                    score={score}
                    total={questionslist.length}
                    percentage={(score / questionslist.length) * 100}
                />
            ) : (
                <>
                    <QuizHeader current={currentQuestionIndex + 1} total={questionslist.length} />
                    <QuizQuestion
                        question={currentQuestion.question}
                        options={currentQuestion.options}
                        selectedAnswer={selectedAnswer}
                        onSelect={handleSelectAnswer}
                    />
                    <QuizFooter
                        isLastQuestion={currentQuestionIndex === questionslist.length - 1}
                        disabled={!selectedAnswer}
                        onNext={handleNext}
                    />
                </>
            )}
            </Shadow>
        </Container>
    );
}