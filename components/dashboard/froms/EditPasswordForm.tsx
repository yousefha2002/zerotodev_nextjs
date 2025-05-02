import InputField from '@/components/ui/forms/InputField'
import SubmitButton from '@/components/ui/forms/SubmitButton';
import React from 'react'
import { FaLock } from 'react-icons/fa';

export default function EditPasswordForm() {
    return (
        <form className="space-y-5">
            <InputField
                name="password"
                type="password"
                required
                placeholder="كلمة المرور القديمة"
                icon={FaLock}
            />
            <InputField
                name="password"
                type="password"
                required
                placeholder="كلمة المرور الجديدة"
                icon={FaLock}
            />
            <SubmitButton/>
        </form>
    )
}
