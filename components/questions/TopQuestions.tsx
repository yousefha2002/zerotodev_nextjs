import { CiStar } from "react-icons/ci";
import SidebarCard from "../ui/SidebarCard";
import SidebarList from "../ui/SidebarList";
import questions from "@/data/fake/questions";

const TopQuestions = () => {
    const items = questions.slice(0,3).map((q) => ({
        label: q.question,
        href: `/questions/${q.id}`,
    }));

    return (
        <SidebarCard title="الأكثر مشاهدة" icon={<CiStar size={24} />}>
            <SidebarList items={items} />
        </SidebarCard>
    );
};
export default TopQuestions;