import React from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { getUserQuizes } from "@/lib/user-quiz";
import NotFoundText from "@/components/ui/NotFoundText";
import { Metadata } from "next";
import { projectName } from "@/utils/constants";
import QuizItem from "@/components/dashboard/QuizItme";

export const metadata: Metadata = {
    title: `كويزاتي | ${projectName}`,
    description: 'استعرض جميع الكويزات التي قمت بها مع تفاصيل الدرجات والنتائج التي حصلت عليها.',
};

export default async function Page() {
    const quizes = await getUserQuizes();
    return (
        <Container className="py-10">
            <SectionTitle
                title="كويزاتي"
                subtitle="هنا يمكنك مشاهدة جميع الكويزات التي قمت بها مع الدرجات."
            />

            {
                quizes.length > 0
                ?
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {quizes.map((quiz) => (
                        <QuizItem
                            key={quiz.quiz.id + 'z'}
                            title={quiz.quiz.title}
                            score={quiz.mark}
                            total={quiz.total}
                        />
                    ))}
                </div>
                :
                <NotFoundText/>
            }
        </Container>
    );
}