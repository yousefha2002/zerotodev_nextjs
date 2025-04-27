import { SocialIcon } from "react-social-icons";
import Container from "./ui/Container";

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-8 mt-10">
            <Container className="flex justify-between items-center">
                <SocialIcon
                    url="https://www.instagram.com/yourusername/"
                    style={{ width: 30, height: 30 }}
                />
                <p className="md:text-[16px] text-[14px] text-center">
                    Made with ❤️ by <span className="font-semibold">Yousef & Mohammed</span>
                </p>
            </Container>
        </footer>
    );
}