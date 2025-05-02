import React from 'react';
import InputField from '@/components/ui/forms/InputField';
import TextareaField from '@/components/ui/forms/TextAreaField';
import { FaUser, FaAlignLeft } from 'react-icons/fa';
import ImageUpload from '@/components/ui/forms/ImageUplaod';
import SubmitButton from '@/components/ui/forms/SubmitButton';

const EditProfileForm = () => {
    return (
        <form className="space-y-5">
            <InputField
                name="name"
                type="text"
                required
                placeholder="الاسم"
                icon={FaUser}
            />
            <TextareaField
                required
                name="bio"
                placeholder="نبذة"
                icon={FaAlignLeft}
            />
            <ImageUpload name="image" />
            <SubmitButton/>
        </form>
    );
};

export default EditProfileForm;