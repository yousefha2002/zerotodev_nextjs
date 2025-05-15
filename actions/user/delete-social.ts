'use server'
import { getUserToken } from '@/lib/auth';
import { handleApiError } from '@/utils/api/handleApiError';
import { revalidatePath } from 'next/cache';
import { FormResponse } from '@/types/FormResponce';
import { apiPost } from '@/utils/api/apiPost';

export async function deleteSocialLink(socialLink: number): Promise<FormResponse> {
    const token = await getUserToken();
    const tokenValue = token?.value;
    const response = await apiPost(`${process.env.API}social-media/${socialLink}`, 'DELETE',{}, tokenValue);
    
    if (response.message) {
        return {
        error: handleApiError(response),
        success: '',
        data: null,
        };
    }

    revalidatePath('/','page')

    return {
        success: 'تم حذف اللينك بنجاح',
        error: null,
        data: null,
    };
}