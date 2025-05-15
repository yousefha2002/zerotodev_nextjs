import { apiGet } from "@/utils/api/apitGet";
import { getUserToken } from "./auth";
import { Skill } from "@/types/Skill";

export async function getUserSkills() {
    const token = await getUserToken()
    const tokenValue = token ? token.value : undefined;
    return apiGet<Skill[]>(`${process.env.API}skill`,tokenValue);
}