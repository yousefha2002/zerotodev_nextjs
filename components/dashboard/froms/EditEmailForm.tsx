import InputField from '@/components/ui/forms/InputField'
import SubmitButton from '@/components/ui/forms/SubmitButton';
import React from 'react'
import {FaEnvelope } from 'react-icons/fa';

export default function EditEmailForm() {
    return (
        <form className="space-y-5">
            <InputField
                name="email"
                type="email"
                required
                placeholder="البريد الاكتروني القديم"
                icon={FaEnvelope}
            />
            <InputField
                name="email"
                type="email"
                required
                placeholder="البريد الاكتروني الجديد"
                icon={FaEnvelope}
            />
            <SubmitButton/>
        </form>
    )
}
