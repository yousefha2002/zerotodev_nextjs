'use client'

import React, { useActionState, useEffect, useState } from 'react'
import InputField from '../ui/forms/InputField'
import ImageUpload from '../ui/forms/ImageUplaod'
import SubmitButton from '../ui/forms/SubmitButton'
import { FaEnvelope, FaLock, FaUser, FaInfoCircle } from 'react-icons/fa';
import { signup } from '@/actions/user/signup'
import ErrorMessage from '../ui/forms/ErrorMesage'

export default function RegisterForm() {
    const [state, action, isPending] = useActionState(signup, null)

    const [resetImage, setResetImage] = useState(false); // State to handle image reset
    // Function to reset the form
    const handleReset = () => {
        setResetImage(true); // Trigger reset of the image
        setTimeout(() => setResetImage(false), 0); // Reset the resetImage state to allow future resets
    };

    const [isClient, setIsClient] = useState(false);
    
    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;  // Prevent rendering until the component is on the client side
    }


    return (
        <form className="space-y-4" action={action}>
            <InputField
                name="name"
                type="text"
                required
                placeholder="الاسم"
                icon={FaUser}
                defaultValue={state?.data?.name || ""}
            />
            <InputField
                name="email"
                type="email"
                required
                placeholder="البريد الاكتروني"
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
            <ImageUpload name="image" required={false} reset={resetImage}/>
            <InputField
                name="bio"
                type="text"
                placeholder="وصف"
                icon={FaInfoCircle}
                defaultValue={state?.data?.bio || ""}
            />

            <ErrorMessage>{state?.error}</ErrorMessage>
            <SubmitButton onClick={handleReset} isPending={isPending}>إنشاء حساب</SubmitButton>
        </form>
    );
}