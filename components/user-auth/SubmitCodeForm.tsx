"use client"
import { SendVerifyCode } from '@/actions/user/request-code'
import React, { useActionState } from 'react'
import InputField from '../ui/forms/InputField'
import { FaLock } from 'react-icons/fa'
import SuccessMessage from '../ui/forms/SuccessMessage'
import ErrorMessage from '../ui/forms/ErrorMesage'
import SubmitButton from '../ui/forms/SubmitButton'

export default function SubmitCodeForm() {
        const [state, action, isPending] = useActionState(SendVerifyCode, null)
    
    return (
    <>
        <form action={action}>
            <InputField
            name="code"
            type="text"
            required
            placeholder="أدخل رمز التحقق"
            icon={FaLock}
            defaultValue={state?.data.code||""}
            />
            <SuccessMessage>{state?.success}</SuccessMessage>
            <ErrorMessage>{state?.error}</ErrorMessage>
            <SubmitButton isPending={isPending}>حفظ التغييرات</SubmitButton>
        </form>        
    </>
    )
}
