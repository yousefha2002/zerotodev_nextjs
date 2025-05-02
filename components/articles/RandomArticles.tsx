import { LiaRandomSolid } from "react-icons/lia";
import SidebarCard from "../ui/sidebar/SidebarCard";
import SidebarList from "../ui/sidebar/SidebarList";
import { ContentList } from "@/types/ContentList";

type RandomArticlesProps = {
    articles: ContentList[];
};

const RandomArticles = ({ articles }: RandomArticlesProps) => {
    const items = articles.map((a) => ({
        label: a.title,
        href: `/articles/${a.id}`,
    }));
    return (
        <SidebarCard title="مقالات عشوائية" icon={<LiaRandomSolid size={24} />}>
            <SidebarList items={items} />
        </SidebarCard>
    );
};
export default RandomArticles;