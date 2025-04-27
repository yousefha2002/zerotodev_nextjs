import ArticlesList from "@/components/articles/ArticlesList";
import Categories from "@/components/articles/Categories";
import RandomArticles from "@/components/articles/RandomArticles";
import TopArticles from "@/components/articles/TopArticles";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import articleslist from "@/data/fake/articleslist";
import categories from "@/data/fake/categories";

type ArticlesPageProps = {
    selectedCategory?: string;
};

const ArticlesPage = ({ selectedCategory }: ArticlesPageProps) => {
    // Filter articles by category if selected
    const filteredArticles = selectedCategory
        ? articleslist.filter(article => article.category === selectedCategory)
        : articleslist;

    return (
        <Container className="py-12">
            <SectionTitle
                title="مقالات البرمجة"
                subtitle="اكتشف مقالاتنا المميزة حول أحدث مواضيع البرمجة والتكنولوجيا."
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Sidebar */}
                <div className="lg:col-span-4 flex flex-col gap-8">
                    <Categories categories={categories} />
                    <TopArticles articles={articleslist} />
                    <RandomArticles articles={articleslist} />
                </div>

                {/* Article List */}
                <div className="lg:col-span-8 flex flex-col gap-8">
                    <ArticlesList
                        articles={filteredArticles}
                        currentPage={1}
                        totalPages={5}
                    />
                </div>
            </div>
        </Container>
    );
};

export default ArticlesPage;