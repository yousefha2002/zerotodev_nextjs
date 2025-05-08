'use server'
import { getUserToken } from '@/lib/auth';
import { handleApiError } from '@/utils/api/handleApiError';
import { revalidatePath } from 'next/cache';
import { FormResponse } from '@/types/FormResponce';
import { apiPost } from '@/utils/api/apiPost';

export async function deleteComment(commentId: number): Promise<FormResponse> {
    const token = await getUserToken();
    const tokenValue = token?.value;
    console.log(tokenValue)
    const response = await apiPost(`${process.env.API}comment/${commentId}`, 'DELETE',{}, tokenValue);
    
    if (response.message) {
        return {
        error: handleApiError(response),
        success: '',
        data: null,
        };
    }

    revalidatePath('/','page')

    return {
        success: 'تم حذف التعليق بنجاح',
        error: null,
        data: null,
    };
}