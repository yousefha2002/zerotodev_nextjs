import ActivityPointsSection from "@/components/home/ActivityPointsSection";
import ArticlesSection from "@/components/home/ArticlesSection";
import CategoriesGrid from "@/components/home/CategoriesGrid";
import ChallengesSection from "@/components/home/ChallengesSection";
import ContributionSection from "@/components/home/ContributionSection";
import HeroSection from "@/components/home/HeroSection";
import QuestionsSection from "@/components/home/QuestionsSection";
import QuizzesSection from "@/components/home/QuizzesSection";
import TopUsersSection from "@/components/home/TopUsersSection";
import { articles } from "@/data/fake/articles";
import questions from "@/data/fake/questions";
import { users } from "@/data/fake/users";

export default function page() {
    return (
        <section>
            <HeroSection/>
            <CategoriesGrid/>
            <ArticlesSection articles={articles} />
            <QuizzesSection quizzes={articles} />
            <ChallengesSection challenges={articles} />
            <TopUsersSection users={users}/>
            <QuestionsSection questions={questions}/>
            <ActivityPointsSection/>
            <ContributionSection/>
        </section>
    );
}