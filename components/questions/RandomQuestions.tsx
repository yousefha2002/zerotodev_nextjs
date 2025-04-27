import { CiShuffle } from "react-icons/ci";
import SidebarCard from "../ui/SidebarCard";
import SidebarList from "../ui/SidebarList";
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
