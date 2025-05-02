import Shadow from "../ui/Shadow";

interface CommentItemProps {
    content: string;
    type: "مقال" | "تحدي";
    relatedTitle: string;
    date: string;
}

export default function CommentItem({ content, type, relatedTitle, date }: CommentItemProps) {
    return (
        <Shadow className="bg-white py-5 border hover:shadow-lg transition-all duration-300">
            <div className="flex justify-between items-center mb-3">
            <span className={`text-sm font-bold ${type === "مقال" ? "text-primary" : "text-accent"}`}>
                {type}
            </span>
            <span className="text-sm text-muted">{date}</span>
            </div>
    
            <h3 className="text-lg font-semibold text-dark mb-2">
            على: <span className="underline">{relatedTitle}</span>
            </h3>
    
            <p className="text-muted">{content}</p>
        </Shadow>
    );
}