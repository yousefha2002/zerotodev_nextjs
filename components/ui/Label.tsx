import Link from 'next/link';
import React from 'react';

export default function Label({ name, slug }: { name: string, slug: string }) {
    return (
        <Link href={`/category/${slug}`} className='py-1 px-3 rounded-full bg-primary text-white'>
            {name}
        </Link>
    );
}