import { Skill } from "./Skill"
import { SocialLink } from "./SocialLink"

type UserBasic = {
    id:number,
    name:string,
    image:string
}

export type User = UserBasic&{
    bio:string,
    email:string
}

export type TopUser=UserBasic&{
    points:number
}

export type UserStats = {
    points: number,
    commentsCount: number,
    articleViewsCount: number
}

export type UserProfilePublic = UserBasic&{
    bio:string,
    points: number;
    createdAt: string;
    commentsCount: number;
    articlesViewed: number;
    questionsViewed: number;
    pointsHistoryCount: number;
    skills: Skill[];
    socialmedias: SocialLink[];
}