import React from 'react'
import PostImage from '../post/PostImage'
import fakeArticle from '@/data/fake/fakeArticle'
import PostHeader from '../post/PostHeader'
import PostBody from '../post/PostBody'
import Shadow from '../ui/Shadow'
import { Article } from '@/types/Article'
import formatDate from '@/utils/formatDate'

export default function SingleArticlePage({article}:{article:Article}) {
    return (
        <Shadow className='bg-white'>
            <PostImage src={fakeArticle.image} alt={article.title} />
                <PostHeader
                    title={article.title}
                    category={{name:article.category.name,id:article.category.id}}
                    date={article.publish_date}
                />
                <PostBody
                    description={article.headline}
                    content={article.content}
                />
        </Shadow>
    )
}