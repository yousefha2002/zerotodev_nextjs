import { apiGet } from "@/utils/api/apitGet";
import { getUserToken } from "./auth";
import { SocialLink } from "@/types/SocialLink";

export async function getUserSocialMedia() {
    const token = await getUserToken()
    const tokenValue = token ? token.value : undefined;
    return apiGet<SocialLink[]>(`${process.env.API}social-media`,tokenValue);
}