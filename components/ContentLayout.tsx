import React from 'react';
import CommentsSection from '@/components/comments/CommentSection';
import Comments from './comments/Comments';
import Container from './ui/Container';

type ContentLayoutProps = {
    content: React.ReactNode;
    comments: { id: number; author: string; content: string; date: string }[];
    isAuthenticated: boolean;
};

export default function ContentLayout({
    content,
    comments,
    isAuthenticated,
}: ContentLayoutProps) {
    return (
        <Container className="bg-light py-12">
            {/* Render Content Type */}
            {content}
            {/* Comments Section */}
            <Comments comments={comments}/>
            <CommentsSection isAuthenticated={isAuthenticated} />
        </Container>
    );
}