export default function formatDate(date: string) {
    const formattedDate = new Date(date).toLocaleDateString('ar-EG', {
        weekday: 'short', // مثال: "الاثنين"
        year: 'numeric',
        month: 'short',   // مثال: "مار"
        day: '2-digit',   // مثال: "11"
    });
    return formattedDate;
}  