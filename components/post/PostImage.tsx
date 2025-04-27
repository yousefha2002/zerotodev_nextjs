import Image from 'next/image';
import React from 'react';

export default function PostImage({ src, alt }: { src: string, alt: string }) {
    return (
        <Image
            src={src}
            alt={alt}
            width={256}
            height={256}
            className="rounded-xl w-full h-64 object-cover mb-6 shadow-md"
        />
    );
}