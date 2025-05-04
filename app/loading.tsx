export default function Loading() {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-12 bg-light">
        <div className="text-center space-y-4">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-muted text-lg font-medium">جاري التحميل، يرجى الانتظار...</p>
        </div>
        </section>
    );
}
