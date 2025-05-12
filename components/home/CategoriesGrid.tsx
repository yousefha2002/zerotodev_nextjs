import categories from "@/data/categories";
import CategoryCard from "./CategoryCard";
import SectionTitle from "../ui/SectionTitle";
import Container from "../ui/Container";

export default function CategoriesGrid() {
    return (
        <section className="bg-light py-20">
            <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="أقسام الموقع"
                    subtitle="اكتشف المحتوى المناسب لك وابدأ رحلتك البرمجية."
                    align="center"
                />
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
                {categories.slice(0,3).map((category) => (
                    <CategoryCard
                        key={category.title}
                        {...category}
                    />
                ))}
                </div>
            </Container>
        </section>
    );
}