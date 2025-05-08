import SingleArticlePage from '@/components/articles/SingleArticlePage'
import ContentLayout from '@/components/ContentLayout'
import { getSingleArticle } from '@/lib/articles';
import { getUserAuth, getUserToken } from '@/lib/auth';
import React from 'react'

export default async function page({params}:{params:Promise<{id:string}>}) {
    const currentUserAuth = await getUserAuth();
    const currentUserId = currentUserAuth? +currentUserAuth.value : undefined
    const {id} = await params
    const article = await getSingleArticle(+id)
    const token = await getUserToken()
    const isAuthenticated = token ? true : false;
    return (
        <ContentLayout
            content={<SingleArticlePage article={article}/>}
            comments={article.comments}
            isAuthenticated={isAuthenticated} 
            articleId={+id}
            currentUserId={currentUserId}
        />
    )
}