import { CiShuffle } from "react-icons/ci";
import SidebarCard from "../ui/sidebar/SidebarCard";
import SidebarList from "../ui/sidebar/SidebarList";
import questions from "@/data/fake/questions";

const RandomQuestions = () => {

    const items = questions.slice(0,5).map((q) => ({
        label: q.question,
        href: `/questions/${q.id}`,
    }));

    return (
        <SidebarCard title="أسئلة عشوائية" icon={<CiShuffle size={24} />}>
            <SidebarList items={items} />
        </SidebarCard>
    );
};

export default RandomQuestions;
