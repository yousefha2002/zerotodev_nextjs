import Link from "next/link";
import Shadow from "../ui/Shadow";

type Challenge = {
    id: number;
    title: string;
    description: string;
    slug: string;
};

const ChallengeCard = ({ title, description, slug }: Challenge) => {
    return (
        <Link href={`/challenges/${slug}`}>
            <Shadow className="block bg-white hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer relative max-w-sm mx-auto">
                <h3 className="text-xl font-bold text-dark mb-3">
                    {title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed truncate">
                    {description}
                </p>

                <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg opacity-0 hover:opacity-30 transition-all duration-300"></div>
            </Shadow>
        </Link>
    );
};

export default ChallengeCard;