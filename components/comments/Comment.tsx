import React from 'react';

type CommentProps = {
    author: string;
    content: string;
    date: string;
};

export default function Comment({ author, content, date }: CommentProps) {
    return (
        <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{author}</span>
                <span className="text-sm text-muted">{date}</span>
            </div>
            <p className="text-muted">{content}</p>
        </div>
    );
}