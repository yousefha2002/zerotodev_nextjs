'use client'
import React, { useActionState, useEffect, useRef } from 'react';
import Shadow from '../ui/Shadow';
import { addComment } from '@/actions/user/add-comment';
import ErrorMessage from '../ui/forms/ErrorMesage';
import SubmitButton from '../ui/forms/SubmitButton';

type CommentsSectionProps = {
    isAuthenticated: boolean;
    onAddComment: (comment: any) => void;
    questionId?: number;
    articleId?: number;
};

export default function CommentSection({isAuthenticated,onAddComment,articleId,questionId}: CommentsSectionProps) {
    const [state, action, isPending] = useActionState(addComment, null);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state?.success && state.data?.newComment) {
            const newComment = {
                id: Date.now(),
                comment: state.data.newComment,
                createdAt: new Date().toISOString(),
                user: { name: 'أنت' },
            };
            onAddComment(newComment);
            formRef.current?.reset();
        }
    }, [state]);

    return (
        <Shadow className="mt-12 bg-white flex flex-col gap-6">
            <h2 className="text-xl font-semibold bg-primary text-white p-4">اترك تعليقاً</h2>

            {isAuthenticated ? (
                <form ref={formRef} className="flex flex-col gap-4" action={action}>
                    <textarea
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                        rows={4}
                        name="comment"
                        placeholder="اكتب تعليقاً هنا ..."
                        defaultValue={state?.data.comment || ""}
                    />
                    {articleId && (
                        <input type="hidden" name="articleId" value={articleId} />
                    )}
                    {questionId && (
                        <input type="hidden" name="questionId" value={questionId} />
                    )}
                    <ErrorMessage>{state?.error}</ErrorMessage>
                    <SubmitButton isPending={isPending}>إضافة</SubmitButton>
                </form>
            ) : (
                <p className="text-muted">يجب أن تكون مسجل الدخول لتضيف تعليق.</p>
            )}
        </Shadow>
    );
}