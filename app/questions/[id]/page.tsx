import { getUserId } from '@/actions/user/get-userId';
import ContentLayout from '@/components/ContentLayout'
import SingleQuestionPage from '@/components/questions/SingleQuestionPage';
import { getUserAuth, getUserToken } from '@/lib/auth';
import { getSingleQuestion } from '@/lib/questions';
import React from 'react'

const comments = [
    { id: 1, author: 'أحمد', content: 'مقال رائع جداً!', date: '2025-04-27' },
    { id: 2, author: 'سارة', content: 'استفدت كثيرًا شكراً لك.', date: '2025-04-26' },
];

export default async function page({params}:{params:Promise<{id:string}>}) {
    const currentUserAuth = await getUserAuth();
    const currentUserId = currentUserAuth? +currentUserAuth.value : undefined
    const {id} = await params
    const question = await getSingleQuestion(+id)
    const token = await getUserToken()
    const isAuthenticated = token ? true : false;
    return (
        <ContentLayout
            content={<SingleQuestionPage question={question}/>}
            comments={question.comments}
            isAuthenticated={isAuthenticated} 
            questionId={+id}
            currentUserId={currentUserId}
        />
    )
}