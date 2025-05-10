import { Category } from "./Category";
import { Comment } from "./Comment";

export type ArticleList = {
    id: number;
    image: string;
    title: string;
    headline: string;
    publish_date: string;
    views: number;
    category: Category;
};

export type Article = ArticleList & {
    content: string;
    comments: Comment[]; 
};
