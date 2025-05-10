import { ContentList } from "@/types/ContentList";
import Link from "next/link";

export default function QuestionCard({ title,id }: {title:string,id:number}) {
    return (
        <div className="border-b border-gray-200 pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0">
            <Link
                href={`/questions/${id}`}
                className="block bg-white p-4 rounded-md shadow-sm hover:shadow-md transition hover:bg-gray-50"
            >
                <h3 className="text-lg font-medium text-dark">{title}</h3>
            </Link>
        </div>
    );
}