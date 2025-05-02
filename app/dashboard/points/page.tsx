import React from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import PointItem from "@/components/dashboard/PointItem";
import TotalPoints from "@/components/dashboard/TotalPoints";
import points from "@/data/fake/points";

const Page = () => {
    return (
        <Container className="py-10">
            <SectionTitle
                title="نقاطي"
                subtitle="هنا يمكنك مشاهدة تفاصيل الأنشطة التي حصلت على النقاط من خلالها."
            />

            <div className="space-y-6">
                {points.map((point) => (
                <PointItem
                    key={point.id}
                    title={point.title}
                    points={point.points}
                    date={point.date}
                    description={point.description}
                />
                ))}
            </div>

            <TotalPoints totalPoints={20} />
        </Container>
    );
};

export default Page;
