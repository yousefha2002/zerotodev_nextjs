type QuizFooterProps = {
    isLastQuestion: boolean;
    disabled: boolean;
    onNext: () => void;
};

export default function QuizFooter({ isLastQuestion, disabled, onNext }: QuizFooterProps) {
    return (
        <div className="mt-10 flex justify-center">
            <button
                onClick={onNext}
                disabled={disabled}
                className={`py-3 px-8 rounded-full font-semibold text-lg transition-all duration-300
                    ${
                        disabled
                            ? "bg-gray-300 text-muted cursor-not-allowed"
                            : "bg-primary text-white hover:bg-dark hover:scale-105"
                    }
                `}
            >
                {isLastQuestion ? "إنهاء الاختبار" : "السؤال التالي"}
            </button>
        </div>
    );
}