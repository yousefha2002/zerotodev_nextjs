'use client';

import { useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    };

    const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const createLink = (page: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('page', page.toString());
        return `${pathname}?${params.toString()}`;
    };

    const getPageNumbers = () => {
        const range = [];
        const delta = 1;

        const left = Math.max(2, currentPage - delta);
        const right = Math.min(totalPages - 1, currentPage + delta);

        range.push(1);
        if (left > 2) range.push(-1); // -1 as a separator (dots)

        for (let i = left; i <= right; i++) {
        range.push(i);
        }

        if (right < totalPages - 1) range.push(-1);
        if (totalPages > 1) range.push(totalPages);

        return range;
    };

    return (
        <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
        <Link href={createLink(1)}>
            <button
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-md text-sm bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
            الأول
            </button>
        </Link>

        <Link href={createLink(currentPage - 1)}>
            <button
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-md text-sm bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
            السابق
            </button>
        </Link>

        {getPageNumbers().map((page, index) =>
            page === -1 ? (
            <span key={index} className="px-3 py-2 text-gray-500">
                ...
            </span>
            ) : (
            <Link key={index} href={createLink(page)}>
                <button
                className={`px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                    page === currentPage
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 hover:bg-gray-200 text-dark'
                }`}
                >
                {page}
                </button>
            </Link>
            )
        )}

        <Link href={createLink(currentPage + 1)}>
            <button
            disabled={currentPage === totalPages}
            className="px-3 py-2 rounded-md text-sm bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
            التالي
            </button>
        </Link>

        <Link href={createLink(totalPages)}>
            <button
            disabled={currentPage === totalPages}
            className="px-3 py-2 rounded-md text-sm bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
            الأخير
            </button>
        </Link>
        </div>
    );
};

export default Pagination;