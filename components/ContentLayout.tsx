import React from 'react';
import CommentsSection from '@/components/comments/CommentSection';
import PrevNextNavigation from '@/components/ui/PrevNextNavigation';
import Comments from './comments/Comments';
import Container from './ui/Container';

type ContentLayoutProps = {
    content: React.ReactNode;
    comments: { id: number; author: string; content: string; date: string }[];
    isAuthenticated: boolean;
    previous: { title: string; href: string };
    next: { title: string; href: string };
};

export default function ContentLayout({
    content,
    comments,
    isAuthenticated,
    previous,
    next,
}: ContentLayoutProps) {
    return (
        <Container className="bg-light py-12">
            {/* Render Content Type */}
            {content}
            {/* Prev/Next Navigation */}
            <PrevNextNavigation previous={previous} next={next} />
            {/* Comments Section */}
            <Comments comments={comments}/>
            <CommentsSection isAuthenticated={isAuthenticated} />
        </Container>
    );
}