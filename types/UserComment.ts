export type UserComment = {
    id: number;
    createdAt: string;
    comment: string;
    article?: {
        id: number;
        title: string;
    };
    question?: {
        id: number;
        title: string;
    };
};