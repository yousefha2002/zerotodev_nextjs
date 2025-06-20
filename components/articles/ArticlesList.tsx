import { ArticleList } from "@/types/Article";
import ArticleCard from "./ArticleCard";
import Pagination from "../ui/Pagination";
import GoogleAd from "../GoogleAd"; // ✅ استدعاء مكون الإعلان

type ArticlesListProps = {
    articles: ArticleList[];
    currentPage: number;
    totalPages: number;
};

const ArticlesList = ({ articles, currentPage, totalPages }: ArticlesListProps) => {
    return (
        <div>
            <div className="space-y-8">
                {articles.map((article, index) => (
                    <>
                        <ArticleCard
                            key={article.id}
                            {...article}
                        />
                        {index === 2 && (
                            <GoogleAd slot="1234567891" marginClass="my-8" />
                        )}
                    </>
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
    );
};

export default ArticlesList;