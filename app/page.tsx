import ActivityPointsSection from "@/components/home/ActivityPointsSection";
import ArticlesSection from "@/components/home/ArticlesSection";
import CategoriesGrid from "@/components/home/CategoriesGrid";
import ContributionSection from "@/components/home/ContributionSection";
import HeroSection from "@/components/home/HeroSection";
import QuestionsSection from "@/components/home/QuestionsSection";
import { getLatestArticles } from "@/lib/articles";
import { getLatestQuestions } from "@/lib/questions";

export default async function page() {
    const [articles,questions] = await Promise.all([
        getLatestArticles(3),
        getLatestQuestions(5)
    ])
    return (
        <section>
            <HeroSection/>
            <CategoriesGrid/>
            <ArticlesSection articles={articles} />
            <QuestionsSection questions={questions}/>
            <ActivityPointsSection/>
            <ContributionSection/>
        </section>
    );
}