import ArticlesPage from '@/components/articles/ArticlesPage';
import { getArticles, getLatestArticles, getRandomArticles } from '@/lib/articles';
import { getCategories } from '@/lib/categories';
import React from 'react';

type Props = {
    searchParams: Promise<{ page?: string; category?: string }>;
};

export default async function page({searchParams}:Props) {

    const search = await searchParams
    const page = search.page?+search.page :1
    const categoryId = search.category ? +search.category : undefined;
    const [categories,rows,latestArticles,randomArticles] = await Promise.all([
        getCategories(),
        getArticles(page, 5, categoryId),
        getLatestArticles(3),
        getRandomArticles(3)
    ])
    console.log(rows)
    return (
        <ArticlesPage 
            categories={categories}
            articles={rows.articles}
            currentPage={page}
            totalPages={rows.totalPages}
            latestArticles={latestArticles}
            randomArticles={randomArticles}
        />
    );
}