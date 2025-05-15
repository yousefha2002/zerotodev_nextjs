'use server'

import { getUserToken } from '@/lib/auth'
import { apiPost } from '@/utils/api/apiPost'
import { handleApiError } from '@/utils/api/handleApiError'
import { FormResponse } from '@/types/FormResponce'
import { revalidatePath } from 'next/cache'

export async function addSocialLink(prev: unknown,formData: FormData): Promise<FormResponse> {
    const token = await getUserToken()
    const tokenValue = token?.value

    const url = formData.get('url')

    const response = await apiPost(
        `${process.env.API}social-media/create`,
        'POST',
        {
            url,
        },
        tokenValue
    )
    if (response.message) {
        return {
            error: handleApiError(response),
            data: {url},
        }
    }
    revalidatePath('/','page')
    return {
        success: 'تم إضافة اللينك بنجاح',
        data: { newSocialLink:response.data},
        error: null
    };
}