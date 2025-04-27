import Container from '@/components/ui/Container';
import Link from 'next/link';
import Image from 'next/image';
import { projectName } from '@/utils/constants';

export default function HeroSection() {
    return (
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-10">
            <Container className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 text-center md:text-start">
                {/* Content */}
                <div className="flex-1">
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
                    مرحبًا بك في{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-500">
                    {projectName}
                    </span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    تعلم البرمجة بأسلوب بسيط وتفاعلي – مقالات، كويزات، تحديات والمزيد.
                </p>
                <Link
                    href="#start"
                    className="inline-block bg-gradient-to-r from-primary to-red-600 text-white px-8 py-3 rounded-full shadow-lg hover:opacity-90 transition"
                >
                    🚀 ابدأ الآن
                </Link>
                </div>

                {/* Image */}
                <div className="flex-1">
                    <Image
                        src="/images/hero.png"
                        alt="Code Illustration"
                        width={448}
                        height={448}
                        priority
                        className="w-full h-auto max-w-md mx-auto hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </Container>
        </section>
    );
}