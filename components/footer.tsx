import { SocialIcon } from "react-social-icons";
import Container from "./ui/Container";
import Link from "next/link";
import { projectName } from "@/utils/constants";

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-10 mt-10">
            <Container className="grid md:grid-cols-3 gap-6 text-center md:text-left">

                {/* Section 1: Links */}
                <div className="flex flex-col items-center md:items-start gap-2">
                    <h3 className="font-semibold text-lg">روابط مهمة</h3>
                    <Link href="/about" className="text-sm hover:underline">
                        من نحن
                    </Link>
                    <Link href="/privacy-policy" className="text-sm hover:underline">
                        سياسة الخصوصية
                    </Link>
                </div>
                

                {/* Section 2: Contact */}
                <div className="flex flex-col items-center gap-2">
                    <h3 className="font-semibold text-lg">تواصل معنا</h3>
                    <a href="mailto:contact@zerotodev.com" className="text-sm hover:underline">
                        zerotodev2025@gmail.com
                    </a>
                </div>

                {/* Section 3: Socials */}
                <div className="flex flex-col items-center md:items-end gap-2">
                    <h3 className="font-semibold text-lg">تابعنا</h3>
                    <SocialIcon
                        url="https://www.instagram.com/yourusername/"
                        style={{ width: 30, height: 30 }}
                        fgColor="#fff"
                        bgColor="transparent"
                    />
                    <p className="text-sm">© {new Date().getFullYear()} {projectName}</p>
                </div>
            </Container>

            {/* Bottom Note */}
            <div className="mt-8 text-center text-sm text-gray-400">
                Made with ❤️ by <span className="font-semibold">Yousef & Mohammed</span>
            </div>
        </footer>
    );
}