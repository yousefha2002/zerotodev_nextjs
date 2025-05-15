'use server'

import { getUserToken } from '@/lib/auth'
import { apiPost } from '@/utils/api/apiPost'
import { handleApiError } from '@/utils/api/handleApiError'
import { FormResponse } from '@/types/FormResponce'
import { revalidatePath } from 'next/cache'

export async function addSkill(prev: unknown,formData: FormData): Promise<FormResponse> {
    const token = await getUserToken()
    const tokenValue = token?.value

    const title = formData.get('title')

    const response = await apiPost(
        `${process.env.API}skill/create`,
        'POST',
        {
            title,
        },
        tokenValue
    )
    if (response.message) {
        return {
            error: handleApiError(response),
            data: {title},
        }
    }
    revalidatePath('/','page')
    return {
        success: 'تم إضافة المهارى بنجاح',
        data: { newSkill:response.data},
        error: null
    };
}