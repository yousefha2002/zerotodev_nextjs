import { apiGet } from "@/utils/api/apitGet";
import { getUserToken } from "./auth";
import { TopUser, User, UserProfilePublic, UserStats } from "@/types/User";
import { apiGetOrNull } from "@/utils/api/apiGetoOrNull";

export async function getCurrentUser() {
    const token = await getUserToken()
    const tokenValue = token ? token.value : undefined;
    return apiGet<User>(`${process.env.API}user/current`,tokenValue);
}

export async function getTopUsers() {
    return apiGet<TopUser[]>(`${process.env.API}user/top`);
}

export async function getUserStats() {
    const token = await getUserToken()
    const tokenValue = token ? token.value : undefined;
    return apiGet<UserStats>(`${process.env.API}user/stats`,tokenValue);
}

export async function getUserProfilePublic(id:number) {
    return apiGetOrNull<UserProfilePublic>(`${process.env.API}user/profile/${id}`);
}