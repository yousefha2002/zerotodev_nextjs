import { CiShuffle } from "react-icons/ci";
import SidebarCard from "../ui/sidebar/SidebarCard";
import SidebarList from "../ui/sidebar/SidebarList";
import React from 'react'
import { ContentList } from "@/types/ContentList";

export default function RandomQuestions({questions}:{questions:ContentList[]}) {
    const items = questions.map((q) => ({
        label: q.title,
        href: `/questions/${q.id}`,
    }));
    return (
        <SidebarCard title="أسئلة عشوائية" icon={<CiShuffle size={24} />}>
            <SidebarList items={items} />
        </SidebarCard>
    )
}

