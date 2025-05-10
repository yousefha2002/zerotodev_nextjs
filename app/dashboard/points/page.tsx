import React from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import PointItem from "@/components/dashboard/PointItem";
import TotalPoints from "@/components/dashboard/TotalPoints";
import { getUserPoints } from "@/lib/user.point";
import NotFoundText from "@/components/ui/NotFoundText";
import { Metadata } from "next";
import { projectName } from "@/utils/constants";

export const metadata: Metadata = {
    title: `نقاطي | ${projectName}`,
    description: 'عرض تفاصيل النقاط المكتسبة من الأنشطة المختلفة على الموقع، بما في ذلك إجمالي النقاط والأنشطة التي قمت بها.',
};

export default async function page() {
    const points = await getUserPoints();
    return (
        <Container className="py-10">
            <SectionTitle
                title="نقاطي"
                subtitle="هنا يمكنك مشاهدة تفاصيل الأنشطة التي حصلت على النقاط من خلالها."
            />

            <div className="space-y-6">
                {points.length === 0 ? (
                    <NotFoundText />
                ) : (
                    <div className="space-y-6">
                        {points.map((point) => <PointItem key={point.id} point={point} />)}
                    </div>
                )}
            </div>

            <TotalPoints totalPoints={points.reduce((prev, current) => prev + current.points, 0)} />
        </Container>
    );
}