import { Article, ArticleList } from "@/types/Article";
import { ContentList } from "@/types/ContentList";
import { apiGet } from "@/utils/api/apitGet";

export async function getArticles(page = 1, limit = 5, category?: number) {
    const categoryQuery = category ? `&category=${category}` : '';
    return apiGet<{ articles: ArticleList[]; totalPages: number }>(
        `${process.env.API}article/all?page=${page}&limit=${limit}${categoryQuery}`
    );
}

export async function getLatestArticles(limit = 5) {
    return apiGet<ContentList[]>(`${process.env.API}article/latest?limit=${limit}`);
}

export async function getRandomArticles(limit = 5) {
    return apiGet<ContentList[]>(`${process.env.API}article/random?limit=${limit}`);
}

export async function getSingleArticle(id:number) {
    return apiGet<Article>(`${process.env.API}article/${id}`);
}