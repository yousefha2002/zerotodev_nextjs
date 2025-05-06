import { QuestionAnswer } from "./QuestionAnswer";

export type QuestionQuiz = {
    id: number;
    title: string;
    answers:QuestionAnswer[]
}