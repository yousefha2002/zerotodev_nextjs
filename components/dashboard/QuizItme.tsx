import Shadow from "../ui/Shadow";

interface QuizItemProps {
    title: string;
    score: number;
    total: number;
}

export default function QuizItem({ title, score, total }: QuizItemProps) {
    const percentage = (score / total) * 100;

    return (
        <Shadow className="bg-white p-6 rounded-xl border shadow-md hover:shadow-2xl transition-all duration-300">
            <div className="mb-4">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-dark mb-2">{title}</h3>
                <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">
                        {score} / {total}
                    </span>
                    <span className="text-sm font-medium text-muted">
                        {percentage.toFixed(2)}%
                    </span>
                </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </Shadow>
    );
}