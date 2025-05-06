import { QuizSummary, QuizWithQuestions } from "@/types/Quiz";
import { apiGet } from "@/utils/api/apitGet";
import { getUserToken } from "./auth";

export async function getQuizes(page = 1, limit = 5) {
    return apiGet<{ quizes: QuizSummary[]; totalPages: number }>(
        `${process.env.API}quiz/all?page=${page}&limit=${limit}`
    );
}

export async function getViewQuiz(id:number) {
    const token = await getUserToken()
    const tokenValue = token ? token.value : undefined;
    return apiGet<{quiz:QuizSummary,marks:number,hasSubmitted:boolean}>(`${process.env.API}quiz/user/${id}`,tokenValue);
}

export async function getQuizWithQuestions(id:number)
{
    const token = await getUserToken()
    const tokenValue = token ? token.value : undefined;
    return apiGet<QuizWithQuestions>(`${process.env.API}quiz/user/${id}/questions`,tokenValue);
}