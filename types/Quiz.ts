import { QuestionQuiz } from "./QuestionQuiz";

export type QuizSummary = {
    id: number;
    title: string;
    headline: string;
    questionCount: number;
};

export type QuizWithQuestions = {
    id:number,
    questions:QuestionQuiz[]
}