import Link from "next/link";
export default function NotFound() {
    return (
        <section className="min-h-screen bg-light flex items-center justify-center p-8">
            <div className="text-center max-w-md bg-white shadow-lg p-10 rounded-2xl border border-primary">
                <div className="text-[60px] mb-4 text-primary">🚫</div>
                <h1 className="text-4xl font-bold text-dark mb-2">الصفحة غير موجودة</h1>
                <p className="text-muted mb-6">يبدو أنك ضللت الطريق... هذه الصفحة غير متوفرة حاليًا.</p>
                <Link
                    href="/"
                    className="bg-primary text-white px-6 py-2 rounded-xl hover:bg-dark transition duration-300"
                >
                    العودة إلى الصفحة الرئيسية
                </Link>
            </div>
        </section>
    );
}