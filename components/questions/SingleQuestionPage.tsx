import React from 'react'
import Shadow from '../ui/Shadow'
import PostHeader from '../post/PostHeader'
import PostBody from '../post/PostBody'
import fakeQuestion from '@/data/fake/fakeQuestion'
import { Question } from '@/types/Question'

export default function SingleQuestionPage({question}:{question:Question}) {
    return (
        <Shadow className='bg-white'>
            <PostHeader
                title={question.title} 
                date={question.publish_date}
            />
            <PostBody
                description={question.headline}
                content={fakeQuestion.content}
            />
        </Shadow>
    )
}
