type QuizQuestionProps = {
    question: string;
    options: string[];
    selectedAnswer: string | null;
    onSelect: (answer: string) => void;
};

export default function QuizQuestion({
    question,
    options,
    selectedAnswer,
    onSelect,
}: QuizQuestionProps) {
    return (
        <div className="mb-10">
            <h3 className="text-2xl font-semibold mb-6 text-dark">{question}</h3>
            <div className="grid gap-4">
                {options.map((option) => (
                    <button
                        key={option}
                        onClick={() => onSelect(option)}
                        className={`py-3 px-6 rounded-lg border text-lg font-medium transition-colors duration-300
                            ${
                                selectedAnswer === option
                                    ? "bg-primary text-white border-primary scale-105"
                                    : "bg-white text-dark border-gray-300 hover:bg-accent hover:text-dark"
                            }
                        `}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}