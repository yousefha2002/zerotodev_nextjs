'use client'
import { EditEmail } from '@/actions/user/edit-email';
import ErrorMessage from '@/components/ui/forms/ErrorMesage';
import InputField from '@/components/ui/forms/InputField'
import SubmitButton from '@/components/ui/forms/SubmitButton';
import React, { useActionState } from 'react'
import {FaEnvelope } from 'react-icons/fa';

export default function EditEmailForm() {
    const [state, action, isPending] = useActionState(EditEmail, null)
    return (
        <form className="space-y-5" action={action}>
            <InputField
                name="newEmail"
                type="email"
                required
                placeholder="البريد الاكتروني الجديد"
                icon={FaEnvelope}
                defaultValue={state?.data?.newEmail || ""}
            />
            <ErrorMessage>{state?.error}</ErrorMessage>
            <SubmitButton isPending={isPending}>حفظ التغييرات</SubmitButton>
        </form>
    )
}
