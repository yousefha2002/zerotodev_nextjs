import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer";

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '700'], // you can customize weights
});

export const metadata: Metadata = {
  title: "ZeroToDev",
  description: "ZeroToDev هو موقع تعليمي يساعدك على تعلم البرمجة بأسلوب بسيط وممتع. يقدم الموقع مقالات، كويزات، تحديات وبرامج تعليمية تفاعلية تساعدك على تطوير مهاراتك البرمجية من الصفر.",
  icons:{
    icon:'/favicon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow mt-[72px]">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}