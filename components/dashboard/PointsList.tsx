import React from "react";
import PointItem from "@/components/dashboard/PointItem";
import NotFoundText from "@/components/ui/NotFoundText";
import Pagination from "@/components/ui/Pagination";
import { UserPoint } from "@/types/UserPoint";

type Props = {
    points: UserPoint[];
    currentPage: number;
    totalPages: number;
};

export default function PointsList({ points, currentPage, totalPages }: Props) {
    return (
        <>
            <div className="space-y-6">
                {points.length === 0 ? (
                    <NotFoundText />
                ) : (
                    points.map((point) => <PointItem key={point.id} point={point} />)
                )}
            </div>
            {points.length > 0 && (
                <Pagination currentPage={currentPage} totalPages={totalPages} />
            )}
        </>
    );
}