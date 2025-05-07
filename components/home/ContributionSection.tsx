import Link from "next/link";
import Container from "../ui/Container";

export default function ContributionSection() {
    return (
        <section className="py-10 bg-light">
            <Container>
                <div className="bg-white border border-primary p-8 rounded-2xl shadow-lg max-w-3xl mx-auto text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
                    <div className="text-5xl mb-4 text-primary">📣</div> 
                    <h2 className="text-2xl font-bold text-dark mb-2">
                        هل لديك فكرة لمقال؟ أو سؤال محيرك؟
                    </h2>
                    <p className="text-muted text-lg mb-6">
                        أرسل لنا وسنشاركه في قسم{" "}
                        <span className="text-primary font-semibold">سؤال وجواب</span>!
                    </p>
                    <Link href={`/request-question`}
                    className="bg-primary text-white px-6 py-2 rounded-xl hover:bg-dark transition duration-300 ease-in-out transform hover:scale-105">
                        أرسل فكرتك الآن
                    </Link>
                </div>
            </Container>
        </section>
    );
}