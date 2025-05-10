"use server";
import {getUserToken } from "@/lib/auth";
import { FormResponse } from "@/types/FormResponce";
import { apiPost } from "@/utils/api/apiPost";
import { handleApiError } from "@/utils/api/handleApiError";
import { revalidatePath } from "next/cache";

export async function requestQuestion(prev: unknown, formData: FormData): Promise<FormResponse> {
    const title = formData.get('title')
    const token = await getUserToken()
    const tokenValue = token ? token.value : undefined;
    const response = await apiPost(
        `${process.env.API}rquested-question/create`,
        "POST",
        { title},
        tokenValue
    );

    if (response.message) {
        return { error: handleApiError(response),data: {title} };
    }
    revalidatePath('/','layout')
    return { success: "تم إرسال السؤال بنجاح", data: { title: "" } ,error:null};
}