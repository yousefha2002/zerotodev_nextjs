type QuizHeaderProps = {
    current: number;
    total: number;
};

export default function QuizHeader({ current, total }: QuizHeaderProps) {
    return (
        <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary">
                السؤال {current} من {total}
            </h2>
            <div className="w-3/4 mx-auto h-2 bg-light rounded-full mt-4 overflow-hidden">
                <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${(current / total) * 100}%` }}
                ></div>
            </div>
        </div>
    );
}
