"use server";
import { apiPost } from "@/utils/api/apiPost";
import { handleApiError } from "@/utils/api/handleApiError";
import { FormResponse } from "@/types/FormResponce";
import { revalidatePath } from "next/cache";
import { getUserToken } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function submitQuizAnswers(answers: number[], quizId: number): Promise<FormResponse> {
    const token = await getUserToken()
    const tokenValue = token ? token.value : undefined;
    const response = await apiPost(
        `${process.env.API}quiz/submit`,
        "POST",
        { answers, quizId },
        tokenValue
    );

    if (response.message) {
        return { error: handleApiError(response), data: {} }; 
    }
    revalidatePath("/quizzes", "layout");
    redirect(`/quizzes/${quizId}`)
}