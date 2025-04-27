import React from 'react';
import Shadow from '../ui/Shadow';

type CommentsSectionProps = {
    isAuthenticated: boolean;
};

export default function CommentsSection({ isAuthenticated }: CommentsSectionProps) {
    return (
        <Shadow className="mt-12 bg-white flex flex-col gap-6">
            <h2 className="text-xl font-semibold bg-primary text-white p-4">اترك تعليقاً</h2>

            {isAuthenticated ? (
                <form className="flex flex-col gap-4">
                    <textarea
                        className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                        rows={4}
                        placeholder="اكتب تعليقاً هنا ..."
                    />
                    <button
                        type="submit"
                        className="self-end bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition"
                    >
                        إضافة
                    </button>
                </form>
            ) : (
                <p className="text-muted">
                    يجب أن تكون مسجل الدخول لتضيف تعليق.
                </p>
            )}
        </Shadow>
    );
}