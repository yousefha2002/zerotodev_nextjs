import { SocialLink } from "@/types/SocialLink";
import { SocialIcon } from "react-social-icons";
import Shadow from "../ui/Shadow";

export function UserSocialMedia({ links }: {links:SocialLink[]}) {
    if (links.length === 0) return null;

    return (
        <Shadow className="bg-white my-6">
            <h2 className="text-lg font-semibold mb-2">مواقع التواصل الاجتماعي</h2>
            <div className="space-y-2">
                {links.map(link=><SocialIcon url={link.url} />)}
            </div>
        </Shadow>
    );
}