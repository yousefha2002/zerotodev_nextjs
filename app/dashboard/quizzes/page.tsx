import React from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import quizesList from "@/data/fake/quizesList";
import QuizItem from "@/components/dashboard/QuizItme";

export default function Page() {
    return (
        <Container className="py-10">
            <SectionTitle
                title="كويزاتي"
                subtitle="هنا يمكنك مشاهدة جميع الكويزات التي قمت بها مع الدرجات."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {quizesList.map((quiz) => (
                    <QuizItem
                        key={quiz.id}
                        title={quiz.title}
                        score={quiz.score}
                        total={quiz.total}
                    />
                ))}
            </div>
        </Container>
    );
}