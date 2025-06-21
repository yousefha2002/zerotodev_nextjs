'use client';

import React, { startTransition, useActionState, useEffect, useOptimistic } from 'react';
import { FaTrash, FaLink } from 'react-icons/fa';
import InputField from '@/components/ui/forms/InputField';
import SubmitButton from '@/components/ui/forms/SubmitButton';
import { SocialIcon } from 'react-social-icons';
import ClientOnly from '../ClientOnly';
import { SocialLink } from '@/types/SocialLink';
import { deleteSocialLink } from '@/actions/user/delete-social';
import { addSocialLink } from '@/actions/user/add-socialLink';
import ErrorMessage from '../ui/forms/ErrorMesage';
import { socialLinksReducer } from '@/lib/optimistic/socialLinksReducer';

export default function SocialLinksEditor({ socialLinks }: { socialLinks: SocialLink[] }) {
    const [state, action, isPending] = useActionState(addSocialLink, null);
    const [optimisticLinks, setOptimisticLinks] = useOptimistic(socialLinks,socialLinksReducer);

    const handleDeleteSocialLink = async (id: number) => {
        startTransition(() => {
            setOptimisticLinks({ type: 'delete', id });
        });
        await deleteSocialLink(id);
    };

    const handleAddSociaLink = (link: SocialLink) => {
        startTransition(() => {
            setOptimisticLinks({ type: 'add', socialLink: {url:link.url,id:Date.now()} });
        });
    };

    useEffect(() => {
        if (state?.success && state.data?.newSocialLink) {
            handleAddSociaLink(state.data.newSocialLink);
        }
    }, [state]);

    return (
        <ClientOnly>
            <form className="space-y-5" action={action}>
                <div className="mb-6 space-y-4">
                    {optimisticLinks.map((link) => (
                        <div
                        key={link.id}
                        className="flex items-center justify-between bg-gradient-to-r from-indigo-50 via-white to-indigo-50 hover:from-indigo-100 hover:to-indigo-100 transition-colors px-6 py-3 rounded-xl shadow-lg group"
                        >
                        <SocialIcon url={link.url} style={{ height: 28, width: 28 }} />
                        <button
                            type="button"
                            onClick={() => handleDeleteSocialLink(link.id)}
                            className="text-red-500 hover:text-red-700 transition-transform duration-300 transform group-hover:scale-110"
                            aria-label={`حذف رابط التواصل الاجتماعي`}
                        >
                            <FaTrash size={20} />
                        </button>
                        </div>
                    ))}
                </div>
                <InputField
                name="url"
                placeholder="رابط الحساب"
                type="url"
                icon={FaLink}
                required={true}
                />

                <ErrorMessage>{state?.error}</ErrorMessage>
                <SubmitButton isPending={isPending}>إضافة الموقع</SubmitButton>
            </form>
        </ClientOnly>
    );
}