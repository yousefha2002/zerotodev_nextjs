'use client'
import React from 'react';
import Container from './ui/Container';
import CommentSection from './comments/CommentSection';
import Link from 'next/link';
import CommentSummary from './comments/CommentSummary';

type ContentLayoutProps = {
    content: React.ReactNode;
    commentCount: number;
    isAuthenticated: boolean;
    articleId?:number,
    questionId?:number,
};

export default function ContentLayout({content,commentCount,isAuthenticated,articleId,questionId}: ContentLayoutProps) {

    return (
        <Container className="bg-light py-12">
            {content}
            <CommentSummary commentCount={commentCount} articleId={articleId} questionId={questionId}/>
            <CommentSection 
                isAuthenticated={isAuthenticated}
                articleId={articleId}
                questionId={questionId}
            />
        </Container>
    );
}