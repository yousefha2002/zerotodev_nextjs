import { CiShuffle } from "react-icons/ci";
import SidebarCard from "../ui/sidebar/SidebarCard";
import SidebarList from "../ui/sidebar/SidebarList";
import React from 'react'
import { ContentList } from "@/types/ContentList";

export default function TopQuestions({questions}:{questions:ContentList[]}) {
    const items = questions.map((q) => ({
        label: q.title,
        href: `/questions/${q.id}`,
    }));
    return (
        <SidebarCard title="أحدث الأسئلة" icon={<CiShuffle size={24} />}>
            <SidebarList items={items} />
        </SidebarCard>
    )
}

