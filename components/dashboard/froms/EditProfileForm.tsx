'use client'
import React, { useActionState } from 'react';
import InputField from '@/components/ui/forms/InputField';
import TextareaField from '@/components/ui/forms/TextAreaField';
import { FaUser, FaAlignLeft } from 'react-icons/fa';
import ImageUpload from '@/components/ui/forms/ImageUplaod';
import SubmitButton from '@/components/ui/forms/SubmitButton';
import { UpdateProfile } from '@/actions/user/update-profile';
import ErrorMessage from '@/components/ui/forms/ErrorMesage';
import { User } from '@/types/User';

export default function EditProfileForm({user}:{user:User}) {
    const [state, action, isPending] = useActionState(UpdateProfile, null)
    return (
        <form className="space-y-5" action={action}>
            <InputField
                name="name"
                type="text"
                required
                placeholder="الاسم"
                icon={FaUser}
                defaultValue={user.name || state?.data.name || ""}
            />
            <TextareaField
                required
                name="bio"
                placeholder="نبذة"
                icon={FaAlignLeft}
                defaultValue={user.bio || state?.data.bio || ""}
            />
            <ImageUpload name="image" defaultValue={user.image}/>
            <ErrorMessage>{state?.error}</ErrorMessage>
            <SubmitButton isPending={isPending}>حفظ التغييرات</SubmitButton>
        </form>
    );
}
