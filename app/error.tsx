"use client";
import Link from "next/link";

interface ErrorProps {
    error: Error;
}

export default function Error({ error }: ErrorProps) {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-light">
        <div className="border border-primary rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
            <div className="text-[64px] mb-4">😕</div>
            <h1 className="text-3xl font-extrabold text-primary mb-3">حدث خطأ غير متوقع</h1>
            <p className="text-muted mb-6">
            {error.message || "نأسف! هناك مشكلة في تحميل الصفحة. حاول مرة أخرى لاحقًا."}
            </p>
            <Link
            href="/"
            className="inline-block bg-primary hover:bg-dark text-white font-medium px-6 py-2 rounded-full transition"
            >
            العودة للرئيسية
            </Link>
        </div>
        </section>
  );
}