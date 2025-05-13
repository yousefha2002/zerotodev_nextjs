'use client'
import React, { startTransition, useOptimistic } from 'react';
import { Comment } from '@/types/Comment';
import { deleteComment } from '@/actions/user/delete-comment';
import Container from '../ui/Container';
import Comments from './Comments';

type CommentLayoutProps = {
    comments: Comment[];
    currentUserId?: number;
};

export default function CommentLayout({comments,currentUserId}: CommentLayoutProps) {
    const [optimisticComments, setOptimisticComments] = useOptimistic(
        comments,
        (currentComments, action: { type: 'delete'; id: number }) => {
            if (action.type === 'delete') {
                return currentComments.filter((c) => c.id !== action.id);
            }
            return currentComments;
        }
    );

    const handleDeleteComment = async (id: number) => {
        startTransition(() => {
            setOptimisticComments({ type: 'delete', id });
        });
        await deleteComment(id);
    };

    return (
        <>
            <Comments
                comments={optimisticComments}
                onDeleteComment={handleDeleteComment}
                currentUserId={currentUserId}
            />
        </>
    );
}