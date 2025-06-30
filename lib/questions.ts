import { ContentList } from "@/types/ContentList";
import { Question, QuestionList } from "@/types/Question";
import { apiGet } from "@/utils/api/apitGet";
import { getUserToken } from "./auth";
import { apiGetOrNull } from "@/utils/api/apiGetoOrNull";

export async function getQuestions(page = 1, limit = 5, name?: string) {
  const nameQuery = name ? `&name=${name}` : "";

  return apiGet<{ questions: QuestionList[]; totalPages: number }>(
    `${process.env.API}question/all?page=${page}&limit=${limit}${nameQuery}`
  );
}

export async function getLatestQuestions(limit = 5) {
  return apiGet<ContentList[]>(
    `${process.env.API}question/latest?limit=${limit}`
  );
}

export async function getRandomQuestions(limit = 5) {
  return apiGet<ContentList[]>(
    `${process.env.API}question/random?limit=${limit}`
  );
}

export async function getSingleQuestion(id: number) {
  const token = await getUserToken();
  const tokenValue = token ? token.value : undefined;
  return apiGetOrNull<Question>(`${process.env.API}question/${id}`, tokenValue);
}
