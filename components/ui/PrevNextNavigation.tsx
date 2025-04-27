import Link from 'next/link';
import React from 'react';
import Shadow from './Shadow';

type PrevNextNavigationProps = {
    previous?: { title: string; href: string };
    next?: { title: string; href: string };
};

export default function PrevNextNavigation({ previous, next }: PrevNextNavigationProps) {
    if (!previous && !next) return null;

    return (
        <Shadow className="flex justify-between border-t mt-8 pt-6 bg-white">
            {previous ? (
                <div>
                    <p className="text-muted text-sm mb-1">السابق</p>
                    <Link href={previous.href} className="text-primary font-semibold hover:underline">
                        {previous.title}
                    </Link>
                </div>
            ) : <div />}

            {next ? (
                <div className="text-right">
                    <p className="text-muted text-sm mb-1">التالي</p>
                    <Link href={next.href} className="text-primary font-semibold hover:underline">
                        {next.title}
                    </Link>
                </div>
            ) : <div />}
        </Shadow>
    );
}