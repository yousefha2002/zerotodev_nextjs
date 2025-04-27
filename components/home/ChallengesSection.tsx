import Card from "../ui/Card";
import { Article } from "@/types/Article";
import ContentSection from "./ContentSection";

type ChallengesSectionProps = {
    challenges: Article[];
};

const ChallengesSection = ({ challenges }: ChallengesSectionProps) => {
    return (
        <ContentSection
        title="أحدث التحديات"
        subtitle="شارك في التحديات البرمجية واختبر مهاراتك"
        data={challenges}
        renderItem={(challenge) => (
            <Card
                key={challenge.id}
                image={challenge.image}
                title={challenge.title}
                link={`/challenges/${challenge.id}`}
            />
        )}
        />
    );
};
export default ChallengesSection;