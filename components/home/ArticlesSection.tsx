import Card from "../ui/Card";
import ContentSection from "./ContentSection";
import { ContentList } from "@/types/ContentList";

type ArticlesSectionProps = {
    articles: ContentList[];
};

const ArticlesSection = ({ articles }: ArticlesSectionProps) => {
    return (
        <ContentSection
        title="أحدث المقالات"
        subtitle="اكتشف المقالات المفيدة التي ستساعدك في رحلتك البرمجية"
        data={articles}
        renderItem={(article) => (
            <Card
                key={article.id}
                image={article.image}
                title={article.title}
                link={`/articles/${article.id}`}
            />
        )}
        />
    );
};
export default ArticlesSection;