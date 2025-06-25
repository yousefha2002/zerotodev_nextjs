"use server";

import { clearEmailAuth, getEmailAuth, setEmailAuth } from "@/lib/auth";
import { apiPost } from "@/utils/api/apiPost";
import { handleApiError } from "@/utils/api/handleApiError";
import { FormResponse } from "@/types/FormResponce";
import { redirect } from "next/navigation";

export async function requestCode(
  prev: unknown,
  formData: FormData
): Promise<FormResponse> {
  const email = formData.get("email") as string;

  const response = await apiPost(
    `${process.env.API}user/request-code`,
    "POST",
    { email }
  );
  if (response.message) {
    return {
      error: handleApiError(response),
      data: { email: email },
    };
  }
  clearEmailAuth();
  await setEmailAuth(email);
  redirect("/submit-code");
  return {
    success: "تم إضافة الرمز بنجاح",
    error: null,
  };
}

export async function SendVerifyCode(
  prev: unknown,
  formData: FormData
): Promise<FormResponse> {
  const verifyCode = formData.get("code") as string;
  const email = await getEmailAuth();
  const response = await apiPost(`${process.env.API}user/verify-code`, "PUT", {
    email,
    code: verifyCode,
  });
  if (response.message) {
    return {
      error: handleApiError(response),
      data: { email: email, code: verifyCode },
    };
  }
  redirect("/reset-password");
  return {
    success: "تم التحقق من الرمز بنجاح",
    error: null,
  };
}

export async function resetPassword(
  prev: unknown,
  formData: FormData
): Promise<FormResponse> {
  const password = formData.get("password") as string;
  const email = await getEmailAuth();
  const response = await apiPost(
    `${process.env.API}user/reset-password`,
    "PUT",
    {
      email,
      password,
    }
  );
  if (response.message) {
    return {
      error: handleApiError(response),
      data: { email, password },
    };
  }
  clearEmailAuth();
  redirect("/login");
  return {
    success: "تم التحقق من الرمز بنجاح",
    error: null,
  };
}
