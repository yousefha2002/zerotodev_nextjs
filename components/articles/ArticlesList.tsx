import ArticleCard from "./ArticleCard";
import Pagination from "./Pagination";

type Article = {
    title: string;
    excerpt: string;
    image: string;
    category: string;
    slug: string;
};

type ArticlesListProps = {
    articles: Article[];
    currentPage: number;
    totalPages: number;
};

const ArticlesList = ({ articles, currentPage, totalPages }: ArticlesListProps) => {
    return (
        <div>
            <div className="space-y-8">
                {articles.map((article) => (
                    <ArticleCard
                        key={article.slug}
                        title={article.title}
                        excerpt={article.excerpt}
                        image={article.image}
                        category={article.category}
                        slug={article.slug}
                    />
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
    );
};

export default ArticlesList;