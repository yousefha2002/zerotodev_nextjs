export type Comment = {
    id:number,
    comment:string,
    createdAt:string,
    user:Author

}

type Author = {
    id:number,
    name:string
}