import { apiGet } from "@/utils/api/apitGet";
import { getUserToken } from "./auth";
import { UserComment } from "@/types/UserComment";

export async function getUserComments() {
    const token = await getUserToken()
    const tokenValue = token ? token.value : undefined;
    return apiGet<UserComment[]>(`${process.env.API}comment/user-all`,tokenValue);
}