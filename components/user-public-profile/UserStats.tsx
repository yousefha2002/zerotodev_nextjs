import Shadow from "../ui/Shadow";

type Props = {
    comments: number;
    articles: number;
    questions: number;
    history: number;
};

export function UserStats({ comments, articles, questions, history }: Props) {
    const items = [
        { label: "التعليقات", value: comments },
        { label: "زيارة المقالات", value: articles },
        { label: "زيارات الأسئلة", value: questions },
        { label: "النقاط", value: history },
    ];

    return (
        <Shadow className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-4 rounded-xl shadow-sm my-6">
            {items.map((item) => (
                <div
                    key={item.label}
                    className="bg-gray-100 rounded-xl p-4 text-center hover:bg-gray-200 transition-colors"
                >
                    <p className="text-xl font-bold text-gray-800">{item.value}</p>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
            ))}
        </Shadow>
    );
}