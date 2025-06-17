'use client'
import React from 'react';
import Container from './ui/Container';
import CommentSection from './comments/CommentSection';
import CommentSummary from './comments/CommentSummary';
import GoogleAd from './GoogleAd';

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
            <GoogleAd slot="1234567830" className="my-6" />
        </Container>
    );
}