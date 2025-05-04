import ContentLayout from '@/components/ContentLayout'
import SingleQuestionPage from '@/components/questions/SingleQuestionPage';
import { getSingleQuestion } from '@/lib/questions';
import React from 'react'

const comments = [
    { id: 1, author: 'أحمد', content: 'مقال رائع جداً!', date: '2025-04-27' },
    { id: 2, author: 'سارة', content: 'استفدت كثيرًا شكراً لك.', date: '2025-04-26' },
];

export default async function page({params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    const question = await getSingleQuestion(+id)
    return (
        <ContentLayout
            content={<SingleQuestionPage question={question}/>}
            comments={comments}
            isAuthenticated={true} 
        />
    )
}
