import Link from 'next/link';
import React from 'react';

export default function Label({ name, id }: { name: string; id: number }) {
    return (
        <li>
            <Link
                href={{
                    pathname: '/articles',
                    query: { category: id },
                }}
                className="py-1 px-3 rounded-full bg-primary text-white"
            >
                {name}
            </Link>
        </li>
    );
}