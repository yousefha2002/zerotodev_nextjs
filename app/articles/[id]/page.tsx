import SingleArticlePage from '@/components/articles/SingleArticlePage'
import ContentLayout from '@/components/ContentLayout'
import { getSingleArticle } from '@/lib/articles';
import { getUserToken } from '@/lib/auth';
import { projectName } from '@/utils/constants';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React from 'react'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const {id} = await params
    const article = await getSingleArticle(+id);

    return {
        title: `${article?.title} | ${projectName}`,
        description: article?.headline,
    };
}

    export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const article = await getSingleArticle(+id);
    const token = await getUserToken();
    const isAuthenticated = !!token;

    if(!article) notFound()

    return (
        <ContentLayout
            content={<SingleArticlePage article={article} />}
            isAuthenticated={isAuthenticated}
            articleId={+id}
            commentCount={article.commentCount}
        />
    );
}