"use server";
import { getUserToken } from "@/lib/auth";
import { FormResponse } from "@/types/FormResponce";
import { apiPost } from "@/utils/api/apiPost";
import { handleApiError } from "@/utils/api/handleApiError";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function UpdateProfile(prev: any, formData: FormData): Promise<FormResponse> {
    const name = formData.get("name") as string;
    const bio = formData.get("bio") as string;
    const image = formData.get("image") as File | null;
    const token = await getUserToken()
    const tokenValue = token ? token.value : undefined;

    const data = new FormData();
    data.append("name", name);
    data.append("bio", bio);
    if (image && image.size > 0) {
        data.append("image", image);
    }

    const response = await apiPost<{ token: string; user: any}>(
        `${process.env.API}user/update`,
        "PUT",
        data,
        tokenValue
    );

    if (response.message) {
        return { error: handleApiError(response) , data: { name, bio }}
    }

    revalidatePath("/", "layout");
    redirect("/dashboard");
}      