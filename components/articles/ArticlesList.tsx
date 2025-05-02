import {ArticleList } from "@/types/Article";
import ArticleCard from "./ArticleCard";
import Pagination from "../ui/Pagination";

type ArticlesListProps = {
    articles: ArticleList[];
    currentPage: number;
    totalPages: number;
};

const ArticlesList = ({ articles, currentPage, totalPages }: ArticlesListProps) => {
    return (
        <div>
            <div className="space-y-8">
                {articles.map((article) => (
                    <ArticleCard
                        key={article.id}
                        {...article}
                    />
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
    );
};

export default ArticlesList;