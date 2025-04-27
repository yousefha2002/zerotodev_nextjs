import Link from "next/link";

type QuestionCardProps = {
    id: number;
    question: string;
};

export default function QuestionCard({ id, question }: QuestionCardProps) {
    return (
        <div className="border-b border-gray-200 pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0">
            <Link
                href={`/questions/${id}`}
                className="block bg-white p-4 rounded-md shadow-sm hover:shadow-md transition hover:bg-gray-50"
            >
                <h3 className="text-lg font-medium text-dark">{question}</h3>
            </Link>
        </div>
    );
}