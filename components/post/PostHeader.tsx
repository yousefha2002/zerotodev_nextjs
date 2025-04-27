import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import Label from '../ui/Label';

export default function PostHeader({
    title,
    category,
    date,
}: {
    title: string;
    category?: string;
    date?: string;
}) {
    return (
        <div className="mb-6">
            {category&&<Label name={category} slug={category} />}
            <h1 className="text-xl sm:text-2xl font-bold text-dark my-5">
                {title}
            </h1>
            {date&&
            <div className="flex items-center gap-x-2 text-sm sm:text-base text-muted">
                <FaCalendarAlt />
                <span>{date}</span>
            </div>}
        </div>
    );
}