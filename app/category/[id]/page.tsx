import ArticlesPage from "@/components/articles/ArticlesPage";

export default async function page({params}:{params:Promise<{id:string}>}) {
    const {id} = await params
    return (
        <ArticlesPage selectedCategory={id} />
    )
}
