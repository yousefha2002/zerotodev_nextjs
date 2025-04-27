type ActivityCardProps = {
    emoji: string;
    title: string;
    points: string;
    color: string;
    background: string;
};

export default function ActivityCard({ emoji, title, points, color, background }: ActivityCardProps) {
    return (
        <div
            className="p-6 rounded-2xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
            style={{ backgroundColor: background, color: color }}
        >
            <div className="text-4xl mb-4">{emoji}</div>
            <h3 className="text-xl font-semibold mb-1">{title}</h3>
            <p className="text-lg font-bold">{points}</p>
        </div>
    );
}