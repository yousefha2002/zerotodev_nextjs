import { SocialLink } from "@/types/SocialLink";
import { SocialIcon } from "react-social-icons";
import Shadow from "../ui/Shadow";

export function UserSocialMedia({ links }: { links: SocialLink[] }) {
    if (links.length === 0) return null;

    return (
        <Shadow className="bg-white p-4 rounded-xl my-6">
            <h2 className="text-lg font-semibold mb-3">مواقع التواصل الاجتماعي</h2>
            <div className="flex flex-wrap gap-4">
                {links.map((link, index) => (
                    <div key={index}>
                        <SocialIcon
                            url={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ height: 40, width: 40 }}
                            fgColor="#fff"
                        />
                    </div>
                ))}
            </div>
        </Shadow>
    );
}