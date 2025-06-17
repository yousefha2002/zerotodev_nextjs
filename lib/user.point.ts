import { apiGet } from "@/utils/api/apitGet";
import { getUserToken } from "./auth";
import { UserPoint } from "@/types/UserPoint";

export async function getUserPoints(page = 1, limit = 10) {
    const token = await getUserToken();
    const tokenValue = token ? token.value : undefined;
    return apiGet<{ points: UserPoint[]; totalPages: number }>(
        `${process.env.API}user-point/all?page=${page}&limit=${limit}`, 
        tokenValue
    );
}