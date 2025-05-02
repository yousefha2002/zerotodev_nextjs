import { Category } from "@/types/Category";
import { apiGet } from "@/utils/api/apitGet";

export function getCategories()
{
    return apiGet<Category[]>(`${process.env.API}category/all`);
}