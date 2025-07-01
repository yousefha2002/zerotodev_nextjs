import { Article, ArticleList } from "@/types/Article";
import { ContentList } from "@/types/ContentList";
import { apiGet } from "@/utils/api/apitGet";
import { getUserToken } from "./auth";
import { apiGetOrNull } from "@/utils/api/apiGetoOrNull";

export async function getArticles(
  page = 1,
  limit = 5,
  category?: number,
  name?: string
) {
  const categoryQuery = category ? `&category=${category}` : "";
  const nameQuery = name ? `&name=${name}` : "";
  return apiGet<{ articles: ArticleList[]; totalPages: number }>(
    `${process.env.API}article/all?page=${page}&limit=${limit}${categoryQuery}${nameQuery}`
  );
}

export async function getLatestArticles(limit = 5) {
  return apiGet<ContentList[]>(
    `${process.env.API}article/latest?limit=${limit}`
  );
}

export async function getRandomArticles(limit = 5) {
  return apiGet<ContentList[]>(
    `${process.env.API}article/random?limit=${limit}`
  );
}

export async function getSingleArticle(id: number) {
  const token = await getUserToken();
  const tokenValue = token ? token.value : undefined;
  return apiGetOrNull<Article>(`${process.env.API}article/${id}`, tokenValue);
}
