import React from 'react';
import Link from 'next/link';

type CommentSummaryProps = {
    commentCount: number;
    articleId?: number;
    questionId?: number;
};

export default function CommentSummary({commentCount,articleId,questionId,}: CommentSummaryProps) {
    const link =
    articleId !== undefined
        ? `/articles/${articleId}/comments`
        : questionId !== undefined
        ? `/questions/${questionId}/comments`
        : null;

    return (
        <div className="mt-12 bg-white rounded-lg p-6 flex flex-col gap-4 shadow-md">
            <h3 className="text-lg font-semibold">
                {commentCount} {commentCount === 1 ? 'تعليق' : 'تعليقات'}
            </h3>
            {link && (
                <Link
                href={link}
                className="text-primary font-medium underline hover:text-primary/80"
                >
                عرض كل التعليقات
                </Link>
            )}
        </div>
    );
}