export type User = {
    id:number,
    name:string,
    bio:string,
    image:string
    email:string
}

export type TopUser={
    id:number,
    name:string,
    image:string,
    points:number
}

export type UserStats = {
    points: number,
    commentsCount: number,
    articleViewsCount: number
}