'use client'
import React, { useActionState } from 'react'
import TextareaField from '../ui/forms/TextAreaField'
import {FaAlignLeft } from 'react-icons/fa';
import ErrorMessage from '../ui/forms/ErrorMesage';
import SubmitButton from '../ui/forms/SubmitButton';
import { requestQuestion } from '@/actions/user/request-question';

export default function RequestQuestionForm() {
    const [state, action, isPending] = useActionState(requestQuestion, null)
    return (
        <form action={action}>
            <div className='mb-6'>
                <TextareaField
                        required={true}
                        name="title"
                        placeholder="السؤال"
                        icon={FaAlignLeft}
                        defaultValue={state?.data.title || ""}
                    />
            </div>
            <ErrorMessage>{state?.error}</ErrorMessage>
            {state?.success && <p className="text-green-600 mb-4">{state.success}</p>}
            <SubmitButton isPending={isPending}>إرسال السؤال</SubmitButton>
        </form>
    )
}