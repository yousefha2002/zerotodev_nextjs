export type QuestionList = {
    id: number;
    title: string;
    headline: string;
    publish_date: string;
    views: number;
};

export type Question = QuestionList & {
    content: string;
    commentCount: number; 
};