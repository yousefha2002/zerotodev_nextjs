import { CiStar } from "react-icons/ci";
import SidebarCard from "../ui/SidebarCard";
import SidebarList from "../ui/SidebarList";

type Article = {
    title: string;
    slug: string;
};

type TopArticlesProps = {
    articles: Article[];
};

const TopArticles = ({ articles }: TopArticlesProps) => {
    const items = articles.map((article) => ({
        label: article.title,
        href: `/articles/${article.slug}`,
    }));

    return (
        <SidebarCard title="أعلى المقالات مشاهدة" icon={<CiStar size={24} />}>
            <SidebarList items={items} />
        </SidebarCard>
    );
};
export default TopArticles;