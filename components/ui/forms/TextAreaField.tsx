import React from 'react';
import { IconType } from 'react-icons';

type Props = {
    required: boolean;
    name: string;
    placeholder: string;
    icon: IconType;
    defaultValue?: string;
    rows?: number;
};

export default function TextareaField({
    name,
    required,
    placeholder,
    icon: Icon,
    defaultValue,
    rows = 4,
}: Props) {
    return (
        <div className="relative">
            <div className="flex items-start bg-white border border-gray-300 rounded-md">
                <div className="text-gray-500 m-2 pt-2">
                    <Icon />
                </div>
                <textarea
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    defaultValue={defaultValue}
                    rows={rows}
                    className="w-full px-4 py-2 text-sm text-gray-700 focus:outline-none resize-none"
                />
            </div>
        </div>
    );
}