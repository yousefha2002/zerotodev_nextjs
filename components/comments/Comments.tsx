import React from 'react';
import Comment from './Comment'; 
import Shadow from '../ui/Shadow';

type CommentType = {
    id: number;
    author: string;
    content: string;
    date: string;
};

type CommentsSectionProps = {
    comments: CommentType[];
};

export default function Comments({ comments }: CommentsSectionProps) {
    return (
        <Shadow className="mt-12 bg-white flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold bg-primary text-white p-4">
                    {comments.length} {comments.length === 1 ? "تعليق" : "تعليقات"}
                </h3>

                {comments.length > 0 ? (
                    <div className="flex flex-col gap-6">
                        {comments.map((comment) => (
                            <Comment
                                key={comment.id}
                                author={comment.author}
                                content={comment.content}
                                date={comment.date}
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