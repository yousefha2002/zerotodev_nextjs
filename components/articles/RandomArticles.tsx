import { LiaRandomSolid } from "react-icons/lia";
import SidebarCard from "../ui/SidebarCard";
import SidebarList from "../ui/SidebarList";

type Article = {
    title: string;
    excerpt: string;
    image: string;
    category: string;
    slug: string;
};

type RandomArticlesProps = {
    articles: Article[];
};

const RandomArticles = ({ articles }: RandomArticlesProps) => {
    const items = articles.map((a) => ({
        label: a.title,
        href: `/articles/${a.slug}`,
    }));
    return (
        <SidebarCard title="مقالات عشوائية" icon={<LiaRandomSolid size={24} />}>
            <SidebarList items={items} />
        </SidebarCard>
    );
};
export default RandomArticles;