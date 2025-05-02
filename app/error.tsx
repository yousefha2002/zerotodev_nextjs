"use client";
import Link from "next/link";

interface ErrorProps {
    error: Error
}

export default function Error({ error }: ErrorProps) {
    return (
        <section className="min-h-screen bg-light flex items-center justify-center p-8">
            <div className="text-center max-w-md bg-white shadow-lg p-10 rounded-2xl border border-danger">
                <div className="text-[60px] mb-4 text-danger">⚠️</div>
                <h1 className="text-4xl font-bold text-dark mb-2">حدث خطأ ما</h1>
                <p className="text-muted mb-6">
                    {error.message || "آسف، لكننا واجهنا مشكلة في تحميل هذه الصفحة. حاول مرة أخرى لاحقًا."}
                </p>
                <Link
                    href="/"
                    className="bg-danger text-white px-6 py-2 rounded-xl hover:bg-dark transition duration-300"
                >
                    العودة إلى الصفحة الرئيسية
                </Link>
            </div>
        </section>
    );
}