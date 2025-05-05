"use server";
import {getUserToken } from "@/lib/auth";
import { FormResponse } from "@/types/FormResponce";
import { apiPost } from "@/utils/api/apiPost";
import { handleApiError } from "@/utils/api/handleApiError";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function EditPassword(prev: unknown, formData: FormData): Promise<FormResponse> {
    const oldPassword = formData.get('oldPassword')
    const newPassword = formData.get('newPassword')
    const token = await getUserToken()
    const tokenValue = token ? token.value : undefined;
    const response = await apiPost(
        `${process.env.API}user/password`,
        "PATCH",
        { newPassword,oldPassword},
        tokenValue
    );

    if (response.message) {
        return { error: handleApiError(response),data: {oldPassword,newPassword } };
    }
    revalidatePath('/','layout')
    redirect("/dashboard");
}