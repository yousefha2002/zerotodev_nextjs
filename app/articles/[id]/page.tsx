import SingleArticlePage from '@/components/articles/SingleArticlePage'
import ContentLayout from '@/components/ContentLayout'
import React from 'react'

const comments = [
    { id: 1, author: 'أحمد', content: 'مقال رائع جداً!', date: '2025-04-27' },
    { id: 2, author: 'سارة', content: 'استفدت كثيرًا شكراً لك.', date: '2025-04-26' },
];

export default function page() {
    return (
        <ContentLayout
            content={<SingleArticlePage/>}
            comments={comments}
            isAuthenticated={true} 
            previous={{ title: "Previous Article Title", href: "/articles/previous-article" }}
            next={{ title: "Next Article Title", href: "/articles/next-article" }}
        />
    )
}
