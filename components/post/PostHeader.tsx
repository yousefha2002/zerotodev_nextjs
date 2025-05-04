import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import Label from '../ui/Label';
import { Category } from '@/types/Category';
import formatDate from '@/utils/formatDate';

export default function PostHeader({
    title,
    category,
    date,
}: {
    title: string;
    category?: Category;
    date?: string;
}) {
    return (
        <div className="mb-6">
            {category&&<Label {...category} />}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-dark my-5">
                {title}
            </h1>
            {date&&
            <div className="flex items-center gap-x-2 text-sm sm:text-base text-muted">
                <FaCalendarAlt />
                <span>{formatDate(date)}</span>
            </div>}
        </div>
    );
}