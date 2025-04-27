import questions from '@/data/fake/questions'
import React from 'react'
import Shadow from '../ui/Shadow'
import PostHeader from '../post/PostHeader'
import PostBody from '../post/PostBody'
import fakeQuestion from '@/data/fake/fakeQuestion'

export default function SingleQuestionPage() {
    const question = questions[0]
    return (
        <Shadow className='bg-white'>
            <PostHeader
                title={question.question}   
            />
            <PostBody
                description={question.details}
                content={fakeQuestion.content}
            />
        </Shadow>
    )
}
