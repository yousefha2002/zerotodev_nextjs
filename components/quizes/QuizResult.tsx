export default function QuizResult({score,total,percentage,}: {score: number;total: number;percentage: number}) {
    let resultMessage;
    const scorePercentage = score / total;

    if (scorePercentage >= 0.9) {
        resultMessage = "ممتاز جدا!";
    } else if (scorePercentage >= 0.7) {
        resultMessage = "ممتاز!";
    } else if (scorePercentage >= 0.5) {
        resultMessage = "جيد جدا!";
    } else {
        resultMessage = "لا تيأس، حاول مجددًا! مستوى جيد يمكن تحسينه";
    }

    return (
        <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-dark mb-4">نتيجتك</h2>

            <p className="text-base md:text-xl text-muted mb-4">
                حصلت على <span className="font-bold text-dark">{score}</span> من{" "}
                <span className="font-bold text-dark">{total}</span> إجابات صحيحة!
            </p>

            <div className="w-full bg-gray-200 rounded-full mb-4">
                <div
                    className="bg-primary text-center text-white font-semibold py-1 rounded-full"
                    style={{ width: `${percentage}%` }}
                >
                    <span className="px-2">{percentage}%</span>
                </div>
            </div>

            <p className="text-sm sm:text-lg text-muted mb-4">
                عدد الأسئلة: <span className="font-bold text-dark">{total}</span>
            </p>

            <p
                className={`text-sm sm:text-lg font-semibold mb-6 ${
                    scorePercentage >= 0.7 ? "text-primary" : "text-muted"
                }`}
            >
                {percentage >= 90 ? "🎉 " : null}
                {resultMessage}
            </p>

            {scorePercentage >= 0.7 && (
                <div className="text-sm sm:text-lg text-center font-bold text-green-600">
                    <p>مبروك! أنت قد حصلت على نتيجة رائعة!</p>
                </div>
            )}
        </div>
    );
}