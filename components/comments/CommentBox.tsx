import formatDate from '@/utils/formatDate';
import React from 'react';
import { Comment } from '@/types/Comment';
import { getUserId } from '@/actions/user/get-userId';
import Link from 'next/link';

type CommentProps = {
    comment:Comment,
    onDelete?: (commentId: number) => void;
    currentUserId?:number
};

export default function CommentBox({comment,onDelete,currentUserId}: CommentProps) {
    const isOwner = currentUserId === comment.user.id;

    return (
        <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-2">
                <Link href={`/author/${comment.user.id}`}><span className="font-semibold">{comment.user.name}</span></Link>
                <span className="text-sm text-muted">{formatDate(comment.createdAt)}</span>
            </div>
            <p className="text-muted">{comment.comment}</p>

            {isOwner && onDelete && (
                <button
                    onClick={() => onDelete(comment.id)}
                    className="text-red-500 text-sm mt-2 hover:underline"
                >
                    حذف التعليق
                </button>
            )}
        </div>
    );
}