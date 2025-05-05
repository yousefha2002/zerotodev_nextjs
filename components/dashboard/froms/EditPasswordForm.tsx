'use client'
import { EditPassword } from '@/actions/user/edit-password';
import ErrorMessage from '@/components/ui/forms/ErrorMesage';
import InputField from '@/components/ui/forms/InputField'
import SubmitButton from '@/components/ui/forms/SubmitButton';
import React, { useActionState } from 'react'
import { FaLock } from 'react-icons/fa';

export default function EditPasswordForm() {
    const [state, action, isPending] = useActionState(EditPassword, null)
    return (
        <form className="space-y-5" action={action}>
            <InputField
                name="oldPassword"
                type="password"
                required
                placeholder="كلمة المرور القديمة"
                icon={FaLock}
                defaultValue={state?.data?.oldPassword || ""}
            />
            <InputField
                name="newPassword"
                type="password"
                required
                placeholder="كلمة المرور الجديدة"
                icon={FaLock}
                defaultValue={state?.data?.newPassword || ""}
            />
            <ErrorMessage>{state?.error}</ErrorMessage>
            <SubmitButton isPending={isPending}>تعديل كلمة المرور</SubmitButton>
        </form>
    )
}
