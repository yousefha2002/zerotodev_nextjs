import SingleArticlePage from '@/components/articles/SingleArticlePage'
import ContentLayout from '@/components/ContentLayout'
import { getSingleArticle } from '@/lib/articles';
import React from 'react'

const comments = [
    { id: 1, author: 'أحمد', content: 'مقال رائع جداً!', date: '2025-04-27' },
    { id: 2, author: 'سارة', content: 'استفدت كثيرًا شكراً لك.', date: '2025-04-26' },
];

export default async function page({params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    const article = await getSingleArticle(+id)
    return (
        <ContentLayout
            content={<SingleArticlePage article={article}/>}
            comments={comments}
            isAuthenticated={true} 
        />
    )
}
