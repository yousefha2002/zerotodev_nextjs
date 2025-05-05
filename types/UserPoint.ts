export type UserPoint = {
    id: number;
    date: string;
    points: number;
    activity_title: string;
    article?: {
        id: number;
        title: string;
    };
    question?: {
        id: number;
        title: string;
    };
    quiz?: {
        id: number;
        title: string;
    };
};