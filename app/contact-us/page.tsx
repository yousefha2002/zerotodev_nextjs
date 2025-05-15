import Container from "@/components/ui/Container";
import InfoBlock from "@/components/InfoBlock";
import Link from "next/link";

export default function page() {
return (
    <Container className="bg-light text-dark py-12">
        <div className="max-w-3xl mx-auto space-y-10">
            <header className="text-center space-y-4">
            <h1 className="text-3xl font-bold text-primary">تواصل معنا</h1>
            <p className="text-muted text-lg leading-relaxed">
                لأي استفسار أو اقتراح، يمكنك مراسلتنا عبر البريد الإلكتروني وسنرد عليك في أسرع وقت ممكن.
            </p>
            </header>

            <InfoBlock title="البريد الإلكتروني">
            <a href="mailto:zerotodev@gmail.com" className="text-primary underline">
                zerotodev2026@gmail.com
            </a>
            </InfoBlock>

            <InfoBlock title="روابط التواصل الاجتماعي">
            <ul className="list-disc pl-6 text-muted space-y-2">
                <li>
                <Link href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-primary underline">
                    إنستغرام
                </Link>
                </li>
            </ul>
            </InfoBlock>
        </div>
        </Container>
    );
}