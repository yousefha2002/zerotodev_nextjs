import { apiGet } from "@/utils/api/apitGet";
import { getUserToken } from "./auth";
import { User } from "@/types/User";

export async function getCurrentUser() {
    const token = await getUserToken()
    const tokenValue = token ? token.value : undefined;
    return apiGet<User>(`${process.env.API}user/current`,tokenValue);
}