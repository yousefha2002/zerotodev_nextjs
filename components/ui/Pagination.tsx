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

    return (
        <div className="flex justify-center items-center gap-x-2 mt-8">
        <Link href={createLink(currentPage - 1)}>
            <button
            disabled={currentPage === 1}
            className="bg-primary text-white px-6 py-2 rounded-lg disabled:opacity-50 transition duration-300 hover:bg-primary-dark focus:outline-none"
            >
            السابق
            </button>
        </Link>

        <span className="text-lg font-semibold text-dark">
            {`${currentPage} / ${totalPages}`}
        </span>

        <Link href={createLink(currentPage + 1)}>
            <button
            disabled={currentPage === totalPages}
            className="bg-primary text-white px-6 py-2 rounded-lg disabled:opacity-50 transition duration-300 hover:bg-primary-dark focus:outline-none"
            >
            التالي
            </button>
        </Link>
        </div>
    );
};

export default Pagination;