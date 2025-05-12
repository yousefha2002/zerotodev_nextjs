import SingleArticlePage from '@/components/articles/SingleArticlePage'
import ContentLayout from '@/components/ContentLayout'
import { getSingleArticle } from '@/lib/articles';
import { getUserAuth, getUserToken } from '@/lib/auth';
import { projectName } from '@/utils/constants';
import { Metadata } from 'next';
import React from 'react'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const {id} = await params
    const article = await getSingleArticle(+id);

    return {
        title: `${article.title} | ${projectName}`,
        description: article.headline,
    };
}

    export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const currentUserAuth = await getUserAuth();
    const currentUserId = currentUserAuth ? +currentUserAuth.value : undefined;
    const { id } = await params;
    const article = await getSingleArticle(+id);
    const token = await getUserToken();
    const isAuthenticated = !!token;

    return (
        <ContentLayout
            content={<SingleArticlePage article={article} />}
            comments={article.comments}
            isAuthenticated={isAuthenticated}
            articleId={+id}
            currentUserId={currentUserId}
        />
    );
}