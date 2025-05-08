import ActivityPointsSection from "@/components/home/ActivityPointsSection";
import ArticlesSection from "@/components/home/ArticlesSection";
import CategoriesGrid from "@/components/home/CategoriesGrid";
import ContributionSection from "@/components/home/ContributionSection";
import HeroSection from "@/components/home/HeroSection";
import QuestionsSection from "@/components/home/QuestionsSection";
import QuizzesSection from "@/components/home/QuizzesSection";
import { getLatestArticles } from "@/lib/articles";

export default async function page() {
    const articles = await getLatestArticles(3)
    return (
        <section>
            <HeroSection/>
            <CategoriesGrid/>
            <ArticlesSection articles={articles} />
            {/* <QuizzesSection quizzes={articles} />
            <QuestionsSection questions={questions}/> */}
            <ActivityPointsSection/>
            <ContributionSection/>
        </section>
    );
}