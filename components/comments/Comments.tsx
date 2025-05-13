import React from 'react';
import Shadow from '../ui/Shadow';
import { Comment } from '@/types/Comment';
import CommentBox from './CommentBox';

type CommentsSectionProps = {
    comments: Comment[];
    onDeleteComment?: (id: number) => void;
    currentUserId?:number
};

export default function Comments({ comments ,onDeleteComment,currentUserId}: CommentsSectionProps) {
    return (
        <Shadow className="bg-white flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold bg-primary text-white p-4">
                    {comments.length} {comments.length === 1 ? "تعليق" : "تعليقات"}
                </h3>

                {comments.length > 0 ? (
                    <div className="flex flex-col gap-6">
                        {comments.map((comment) => (
                            <CommentBox
                                key={comment.id}
                                comment={comment}
                                onDelete={onDeleteComment}
                                currentUserId={currentUserId}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-muted">لا توجد تعليقات بعد.</p>
                )}
            </div>
        </Shadow>
    );
}