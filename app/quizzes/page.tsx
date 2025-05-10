import QuizList from "@/components/quizes/QuizList";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { getQuizes } from "@/lib/quiz";
import NotFoundText from "@/components/ui/NotFoundText";
import { Metadata } from "next";
import { projectName } from "@/utils/constants";

type Props = {
    searchParams: Promise<{ page?: string; category?: string }>;
};

export const metadata: Metadata = {
    title: `الاختبارات | ${projectName}`,
    description: "اكتشف مجموعة من التحديات والاختبارات البرمجية التي تساعدك على تقييم وتطوير مهاراتك في البرمجة بشكل ممتع وتفاعلي.",
};

export default async function page({ searchParams }: Props) {
    const search = await searchParams;
    const page = search.page ? +search.page : 1;
    const { totalPages, quizes } = await getQuizes(page, 12);

    return (
        <Container className="py-12">
            <SectionTitle
                title="اختبر مهاراتك البرمجية"
                subtitle="اكتشف مجموعة من التحديات البرمجية لاختبار مهاراتك في مختلف المجالات."
            />
            {quizes.length > 0 ? (
                <QuizList quizes={quizes} currentPage={page} totalPages={totalPages} />
            ) : (
                <NotFoundText />
            )}
        </Container>
    );
}