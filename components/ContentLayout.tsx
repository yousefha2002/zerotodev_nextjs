'use client'
import React, { startTransition, useOptimistic } from 'react';
import Comments from './comments/Comments';
import Container from './ui/Container';
import CommentSection from './comments/CommentSection';
import { Comment } from '@/types/Comment';
import { deleteComment } from '@/actions/user/delete-comment';

type ContentLayoutProps = {
    content: React.ReactNode;
    comments: Comment[];
    isAuthenticated: boolean;
    articleId?:number,
    questionId?:number,
    currentUserId?:number
};

export default function ContentLayout({content,comments,isAuthenticated,articleId,questionId,currentUserId}: ContentLayoutProps) {
    type OptimisticAction = { type: 'add'; comment: Comment }| { type: 'delete'; id: number };
    const [optimisticComments, setOptimisticComments] = useOptimistic(
    comments,
    (currentComments, action: OptimisticAction) => {
        switch (action.type) {
        case 'add':
            return [action.comment, ...currentComments];
        case 'delete':
            return currentComments.filter((c) => c.id !== action.id);
        default:
            return currentComments;
            }
        }
    );

    const handleAddComment = (newComment: Comment) => {
        startTransition(() => {
            setOptimisticComments({ type: 'add', comment: newComment });
        });
    };

    const handleDeleteComment = async(id: number) => {
        startTransition(() => {
            setOptimisticComments({ type: 'delete', id });
        });
        await deleteComment(id)
    };

    return (
        <Container className="bg-light py-12">
            {content}
            <Comments comments={optimisticComments} onDeleteComment={handleDeleteComment} currentUserId={currentUserId}/>
            <CommentSection 
                isAuthenticated={isAuthenticated}
                onAddComment={handleAddComment}
                articleId={articleId}
                questionId={questionId}
            />
        </Container>
    );
}