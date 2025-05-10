import { apiGet } from "@/utils/api/apitGet";
import { getUserToken } from "./auth";
import { UserQuiz } from "@/types/UserQuiz";

export async function getUserQuizes() {
    const token = await getUserToken()
    const tokenValue = token ? token.value : undefined;
    return apiGet<UserQuiz[]>(`${process.env.API}user-quiz/all`,tokenValue);
}