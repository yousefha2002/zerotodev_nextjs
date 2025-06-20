import React from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import PointItem from "@/components/dashboard/PointItem";
import { getUserPoints } from "@/lib/user.point";
import NotFoundText from "@/components/ui/NotFoundText";
import { Metadata } from "next";
import { projectName } from "@/utils/constants";
import Pagination from "@/components/ui/Pagination";
import PointsList from "@/components/dashboard/PointsList";

export const metadata: Metadata = {
    title: `نقاطي | ${projectName}`,
    description: 'عرض تفاصيل النقاط المكتسبة من الأنشطة المختلفة على الموقع، بما في ذلك إجمالي النقاط والأنشطة التي قمت بها.',
};

type Props = {
    searchParams: Promise<{ page?: string; category?: string }>;
};

export default async function page({ searchParams }: Props) {
    const search = await searchParams;
    const page = search.page ? +search.page : 1;
    const limit = 10;

    const { points, totalPages } = await getUserPoints(page, limit);

    return (
        <Container className="py-10">
            <SectionTitle 
                title="نقاطي"
                subtitle="هنا يمكنك مشاهدة تفاصيل الأنشطة التي حصلت على النقاط من خلالها."
            />

            <PointsList points={points} currentPage={page} totalPages={totalPages} />
        </Container>
    );
}