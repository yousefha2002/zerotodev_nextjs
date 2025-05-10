export type RelatedEntity = {
    id: number;
    title: string;
};

export type UserQuiz = {
    id: number;
    mark: number;
    total: number;
    quiz: RelatedEntity;
};