'use server'

import { getUserToken } from '@/lib/auth'
import { apiPost } from '@/utils/api/apiPost'
import { handleApiError } from '@/utils/api/handleApiError'
import { revalidatePath } from 'next/cache'
import { FormResponse } from '@/types/FormResponce'

export async function addComment(prev: unknown,formData: FormData): Promise<FormResponse> {
    const token = await getUserToken()
    const tokenValue = token?.value

    const comment = formData.get('comment')
    const questionId = formData.get('questionId')
    const articleId = formData.get('articleId')

    const response = await apiPost(
        `${process.env.API}comment/create`,
        'POST',
        {
            comment,
            questionId: questionId ? +questionId : undefined,
            articleId: articleId ? +articleId : undefined,
        },
        tokenValue
    )
    if (response.message) {
        return {
            error: handleApiError(response),
            data: {comment},
        }
    }

    if (articleId) {
        revalidatePath(`/articles/${articleId}`, 'page');
    }
    if (questionId) {
        revalidatePath(`/questions/${questionId}`, 'page');
    }
    return {
        success: 'تم إضافة التعليق بنجاح',
        data: { newComment: comment?.toString() || '' },
        error: null
    };
}