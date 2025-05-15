'use client'
import React, { useActionState } from 'react'
import InputField from '../ui/forms/InputField'
import { FaEnvelope, FaLock } from 'react-icons/fa';
import SubmitButton from '../ui/forms/SubmitButton';
import { login } from '@/actions/user/login';
import ErrorMessage from '../ui/forms/ErrorMesage';
import ClientOnly from '../ClientOnly';

export default function LoginForm() {
    const [state, action, isPending] = useActionState(login, null)

    return (
        <ClientOnly>
            <form className="space-y-4" action={action}>
                <InputField
                    name="email"
                    type="email"
                    required
                    placeholder="البريد الالكتروني"
                    icon={FaEnvelope}
                    defaultValue={state?.data?.email || ""}
                />
                <InputField
                    name="password"
                    type="password"
                    required
                    placeholder="كلمة المرور"
                    icon={FaLock}
                    defaultValue={state?.data?.password || ""}
                />
                <ErrorMessage>{state?.error}</ErrorMessage>
                <SubmitButton isPending={isPending}>تسجيل الدخول</SubmitButton>
            </form>
        </ClientOnly>
    )
}