import { ArticleList } from "@/types/Article";
import ArticleCard from "./ArticleCard";
import Pagination from "../ui/Pagination";
import GoogleAd from "../GoogleAd"; // ✅ استدعاء مكون الإعلان
import { Fragment } from "react";

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
                    <Fragment key={article.id}>
                        <ArticleCard
                            {...article}
                        />
                        {index === 2 && (
                            <GoogleAd slot="1234567891" marginClass="my-8" />
                        )}
                    </Fragment>
                ))}
            </div>
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
    );
};

export default ArticlesList;