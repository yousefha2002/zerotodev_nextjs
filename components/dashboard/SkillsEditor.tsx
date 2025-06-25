'use client';

import React, { startTransition, useActionState, useEffect, useOptimistic } from 'react';
import { FaTrash, FaPlus } from 'react-icons/fa';
import InputField from '@/components/ui/forms/InputField';
import SubmitButton from '@/components/ui/forms/SubmitButton';
import ClientOnly from '../ClientOnly';
import { Skill } from '@/types/Skill';
import { deleteSkill } from '@/actions/user/delete-skill';
import { addSkill } from '@/actions/user/add-skill';
import ErrorMessage from '../ui/forms/ErrorMesage';
import { skillsReducer } from '@/lib/optimistic/skillsReducer';

export default function SkillsEditor({ skills }: { skills: Skill[] }) {
    const [state, action, isPending] = useActionState(addSkill, null);
    const [optimisticSkills, setOptimisticSkills] = useOptimistic(skills, skillsReducer);

    const handleDeleteSkill = async (id: number) => {
        startTransition(() => {
            setOptimisticSkills({ type: 'delete', id });
        });
        await deleteSkill(id);
    };

    const handleAddSkill = (skill: Skill) => {
        startTransition(() => {
            setOptimisticSkills({ type: 'add', skill: { title: skill.title, id: Date.now() } });
        });
    };

    useEffect(() => {
        if (state?.success && state.data?.newSkill) {
            handleAddSkill(state.data.newSkill);
        }
    }, [state]);

    return (
        <ClientOnly>
            <form className="space-y-5" action={action}>
                <div className="mb-6 space-y-4">
                    {optimisticSkills.map((skill) => (
                        <div
                        key={skill.id}
                        className="flex items-center justify-between bg-gradient-to-r from-indigo-50 via-white to-indigo-50 hover:from-indigo-100 hover:to-indigo-100 transition-colors px-6 py-3 rounded-xl shadow-lg group"
                        >
                        <span className="text-indigo-900 font-semibold text-lg">{skill.title}</span>
                        <button
                            type="button"
                            onClick={() => handleDeleteSkill(skill.id)}
                            className="text-red-500 hover:text-red-700 transition-transform duration-300 transform group-hover:scale-110"
                            aria-label={`حذف مهارة ${skill.title}`}
                        >
                            <FaTrash size={20} />
                        </button>
                        </div>
                    ))}
                </div>

                <InputField
                    name="title"
                    placeholder="عنوان المهارة"
                    type="text"
                    icon={FaPlus}
                    required={true}
                />

                <ErrorMessage>{state?.error}</ErrorMessage>
                <SubmitButton isPending={isPending}>إضافة المهارة</SubmitButton>
            </form>
        </ClientOnly>
    );
}