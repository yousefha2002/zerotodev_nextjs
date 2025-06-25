"use client"
import React, { useActionState } from 'react'
import ErrorMessage from '../ui/forms/ErrorMesage'
import SuccessMessage from '../ui/forms/SuccessMessage'
import SubmitButton from '../ui/forms/SubmitButton'
import { requestCode } from '@/actions/user/request-code'
import InputField from '../ui/forms/InputField'
import { FaEnvelope } from 'react-icons/fa'

export default function RequestCodeForm() {
    const [state, action, isPending] = useActionState(requestCode, null)

  return (
    <form action={action}>
        <InputField
            name="email"
            type="email"
            required
            placeholder="البريد الالكتروني"
            icon={FaEnvelope}
            defaultValue={state?.data?.email || ""}
        />
        <ErrorMessage>{state?.error}</ErrorMessage>
        <SuccessMessage>{state?.success}</SuccessMessage>
        <SubmitButton isPending={isPending}>إرسال رمز التحقق</SubmitButton>
    </form>
  )
}
