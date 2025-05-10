import { UserComment } from "@/types/UserComment";
import Shadow from "../ui/Shadow";
import formatDate from "@/utils/formatDate";

export default function CommentItem({ comment }: {comment:UserComment}) {
    const type = comment.article?"مقالة":"سؤال"
    return (
        <Shadow className="bg-white py-5 border hover:shadow-lg transition-all duration-300">
            <div className="flex justify-between items-center mb-3">
            <span className={`text-sm font-bold ${ type=== "مقالة" ? "text-primary" : "text-accent"}`}>
                {type}
            </span>
            <span className="text-sm text-muted">{formatDate(comment.createdAt)}</span>
            </div>
    
            <h3 className="text-lg font-semibold text-dark mb-2">
            على: <span className="underline">{comment.article?.title||comment.question?.title}</span>
            </h3>
    
            <p className="text-muted">{comment.comment}</p>
        </Shadow>
    );
}