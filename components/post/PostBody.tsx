import React from 'react';
import GoogleAd from '../GoogleAd';

export default function PostBody({
    description,
    content,
}: {
    description: string;
    content: string;
}) {
    return (
        <div>
            <p className="text-dark text-lg mb-6 leading-relaxed">{description}</p>
            <GoogleAd slot="1234567890"/>
            <div
                className="
                    prose 
                    sm:prose-sm 
                    md:prose-base 
                    prose-p:leading-7
                    prose-blockquote:border-l-4
                    prose-blockquote:pl-4
                    prose-blockquote:text-muted
                "
                dangerouslySetInnerHTML={{ __html: content }}
            />
            <GoogleAd slot="1234567890"/>
        </div>
    );
}