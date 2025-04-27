import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c40044',     // 🔴 اللون الأساسي (الأزرار الرئيسية، الروابط المهمة)
        dark: '#1e1e2f',        // ⚫ داكن للهيدر أو الفوتر أو الخلفيات الداكنة
        light: '#f8f8fc',       // ⚪ خلفية الموقع الأساسية (مريح للعين)
        muted: '#6c6c80',       // 🩶 نصوص ثانوية، وصف الكروت أو ملاحظات
        accent: '#ffcc00',      // 🟡 لون تفاعلي للـ hover أو الأزرار الثانوية
        success: '#22c55e',     // ✅ للنجاح أو الرسائل الإيجابية
        danger: '#dc2626',      // ❌ للخطأ أو التنبيهات
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
} satisfies Config;