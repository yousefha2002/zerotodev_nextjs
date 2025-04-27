import React from 'react'
import PostImage from '../post/PostImage'
import fakeArticle from '@/data/fake/fakeArticle'
import PostHeader from '../post/PostHeader'
import PostBody from '../post/PostBody'
import Shadow from '../ui/Shadow'

export default function SingleArticlePage() {
    return (
        <Shadow className='bg-white'>
            <PostImage src={fakeArticle.image} alt={fakeArticle.title} />
                <PostHeader
                    title={fakeArticle.title}
                    category={fakeArticle.category}
                    date={fakeArticle.date}
                />
                <PostBody
                    description={fakeArticle.description}
                    content={fakeArticle.content}
                />
        </Shadow>
    )
}