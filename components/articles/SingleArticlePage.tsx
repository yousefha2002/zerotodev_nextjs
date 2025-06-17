import React from 'react'
import PostImage from '../post/PostImage'
import PostHeader from '../post/PostHeader'
import PostBody from '../post/PostBody'
import Shadow from '../ui/Shadow'
import { Article } from '@/types/Article'
import GoogleAd from '../GoogleAd'

export default function SingleArticlePage({article}:{article:Article}) {
    return (
        <Shadow className='bg-white'>
            <PostImage src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${article.image}`} alt={article.title} />
                <PostHeader
                    title={article.title}
                    category={{name:article.category.name,id:article.category.id}}
                    date={article.publish_date}
                />
                <GoogleAd slot="1234567890" className="my-4" />
                <PostBody
                    description={article.headline}
                    content={article.content}
                />
                <GoogleAd slot="1234567820" className="my-4" />
        </Shadow>
    )
}