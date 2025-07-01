import ArticlesList from "@/components/articles/ArticlesList";
import Categories from "@/components/articles/Categories";
import RandomArticles from "@/components/articles/RandomArticles";
import TopArticles from "@/components/articles/TopArticles";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { ArticleList } from "@/types/Article";
import { Category } from "@/types/Category";
import NotFoundText from "../ui/NotFoundText";
import { ContentList } from "@/types/ContentList";
import GoogleAd from "../GoogleAd";
import SearchByNameFor from "../ui/forms/SearchByNameFor";

type ArticlesPageProps = {
    categories: Category[];
    articles: ArticleList[];
    currentPage: number;
    totalPages: number;
    latestArticles:ContentList[],
    randomArticles:ContentList[]
};

const ArticlesPage = ({ categories, articles, currentPage, totalPages,latestArticles,randomArticles }: ArticlesPageProps) => {


    return (
        <Container className="py-12">
            <SectionTitle
                title="مقالات البرمجة"
                subtitle="اكتشف مقالاتنا المميزة حول أحدث مواضيع البرمجة والتكنولوجيا."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Sidebar */}
                <div className="lg:col-span-4 flex flex-col gap-8">
                    <SearchByNameFor/>
                    <Categories categories={categories} />
                    <TopArticles articles={latestArticles} />
                    <RandomArticles articles={randomArticles} />
                    <GoogleAd slot="1234567890" marginClass="my-2"/>
                </div>

                {/* Article List */}
                <div className="lg:col-span-8 flex flex-col gap-8">
                {articles.length>0?
                    <ArticlesList
                        articles={articles}
                        currentPage={currentPage}
                        totalPages={totalPages}
                    />
                    :
                    <NotFoundText/>
                }
                </div>
            </div>
        </Container>
    );
};

export default ArticlesPage;