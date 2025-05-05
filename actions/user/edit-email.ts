"use server";
import {getUserToken } from "@/lib/auth";
import { FormResponse } from "@/types/FormResponce";
import { apiPost } from "@/utils/api/apiPost";
import { handleApiError } from "@/utils/api/handleApiError";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function EditEmail(prev: unknown, formData: FormData): Promise<FormResponse> {
    const newEmail = formData.get('newEmail')
    const token = await getUserToken()
    const tokenValue = token ? token.value : undefined;
    const response = await apiPost(
        `${process.env.API}user/email`,
        "PATCH",
        { newEmail},
        tokenValue
    );

    if (response.message) {
        return { error: handleApiError(response),data: {newEmail } };
    }
    revalidatePath('/','layout')
    redirect("/dashboard");
}