import { apiGet } from "@/utils/api/apitGet";
import { getUserToken } from "./auth";
import { UserComment } from "@/types/UserComment";
import { Comment } from "@/types/Comment";
import { ItemType } from "@/utils/enums/ItemType";

export async function getUserComments() {
  const token = await getUserToken();
  const tokenValue = token ? token.value : undefined;
  return apiGet<UserComment[]>(
    `${process.env.API}comment/user-all`,
    tokenValue
  );
}

export async function getCommentsByItemId(
  page = 1,
  limit = 10,
  type: ItemType,
  itemId: number
) {
  return apiGet<{ comments: Comment[]; totalPages: number }>(
    `${process.env.API}comment/${itemId}?page=${page}&limit=${limit}&type=${type}`
  );
}
