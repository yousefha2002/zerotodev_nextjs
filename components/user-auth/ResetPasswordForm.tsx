'use client';
import { resetPassword } from '@/actions/user/request-code'
import React, { useActionState } from 'react'
import InputField from '../ui/forms/InputField'
import { FaLock } from 'react-icons/fa'
import SuccessMessage from '../ui/forms/SuccessMessage'
import ErrorMessage from '../ui/forms/ErrorMesage'
import SubmitButton from '../ui/forms/SubmitButton'

export default function ResetPasswordForm() {
    const [state, action, isPending] = useActionState(resetPassword, null)
    
  return (
    <>
    <form action={action}>
        <InputField
        name="password"
        type="password"
        required
        placeholder="أدخل كلمة المرور التحقق"
        icon={FaLock}
        defaultValue={state?.data.password||""}
        />
        <SuccessMessage>{state?.success}</SuccessMessage>
        <ErrorMessage>{state?.error}</ErrorMessage>
        <SubmitButton isPending={isPending}>حفظ التغييرات</SubmitButton>
    </form>
    </>
  )
}
