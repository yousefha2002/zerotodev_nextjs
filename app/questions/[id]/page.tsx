import ContentLayout from '@/components/ContentLayout'
import SingleQuestionPage from '@/components/questions/SingleQuestionPage';
import { getUserToken } from '@/lib/auth';
import { getSingleQuestion } from '@/lib/questions';
import { projectName } from '@/utils/constants';
import { Metadata } from 'next';
import React from 'react'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const {id} = await params
    const question = await getSingleQuestion(+id);
    return {
        title: `${question.title} | ${projectName}`,
        description: question.headline,
    };
}

export default async function page({params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    const question = await getSingleQuestion(+id)
    const token = await getUserToken()
    const isAuthenticated = token ? true : false;
    console.log(question)
    return (
        <ContentLayout
            content={<SingleQuestionPage question={question}/>}
            isAuthenticated={isAuthenticated} 
            questionId={+id}
            commentCount={question.commentCount}
        />
    )
}