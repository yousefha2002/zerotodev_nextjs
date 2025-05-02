"use server";
import { clearAuth, setUserAuth } from "@/lib/auth";
import { FormResponse } from "@/types/FormResponce";
import { apiPost } from "@/utils/api/apiPost";
import { handleApiError } from "@/utils/api/handleApiError";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function login(prev: any, formData: FormData): Promise<FormResponse> {
    const password = formData.get("password") as string;
    const email = formData.get("email") as string;
    
    const response = await apiPost<{ token: string; user: any}>(
        `${process.env.API}user/login`,
        "POST",
        { email, password }
    );

    if (response.message) {
        return { error: handleApiError(response) , data: {email, password }}
    }
    if (response.data?.token) 
    {
        clearAuth()
        setUserAuth(response.data?.token)
    }

    revalidatePath("/", "layout");
    redirect("/");
}      