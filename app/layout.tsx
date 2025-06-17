import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/footer";
import { getUserToken } from "@/lib/auth";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = await getUserToken()
  const token = cookie?.value
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXX"></script>
      </head>
      <body className={`${tajawal.className} flex flex-col min-h-screen`}>
        <Navbar token={token}/>
        <main className="flex-grow mt-[72px]">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}