import { apiGet } from "@/utils/api/apitGet";
import { getUserToken } from "./auth";
import { UserPoint } from "@/types/UserPoint";

export async function getUserPoints() {
    const token = await getUserToken()
    const tokenValue = token ? token.value : undefined;
    return apiGet<UserPoint[]>(`${process.env.API}user-point/all`,tokenValue);
}