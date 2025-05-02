import { CiStar } from "react-icons/ci";
import SidebarCard from "../ui/sidebar/SidebarCard";
import SidebarList from "../ui/sidebar/SidebarList";
import { ContentList } from "@/types/ContentList";

type TopArticlesProps = {
    articles: ContentList[];
};

const TopArticles = ({ articles }: TopArticlesProps) => {
    const items = articles.map((article) => ({
        label: article.title,
        href: `/articles/${article.id}`,
    }));

    return (
        <SidebarCard title="أعلى المقالات مشاهدة" icon={<CiStar size={24} />}>
            <SidebarList items={items} />
        </SidebarCard>
    );
};
export default TopArticles;