"use server";
import { FormResponse } from "@/types/FormResponce";
import { apiPost } from "@/utils/api/apiPost";
import { handleApiError } from "@/utils/api/handleApiError";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function signup(prev: any, formData: FormData): Promise<FormResponse> {
    const name = formData.get("name") as string;
    const password = formData.get("password") as string;
    const email = formData.get("email") as string;
    const bio = formData.get("bio") as string;
    const image = formData.get("image") as File | null;

    const data = new FormData();
    data.append("name", name);
    data.append("password", password);
    data.append("email", email);
    data.append("bio", bio);
    if (image && image.size > 0) {
        data.append("image", image);
    }

    const response = await apiPost<{ token: string; user: any}>(
        `${process.env.API}user/signup`,
        "POST",
        data
    );

    if (response.message) {
        return { error: handleApiError(response) , data: { name, email, password, bio }}
    }

    revalidatePath("/", "layout");
    redirect("/login");
}      