"use client";
import ChallengeCard from "@/components/challanges/ChallangeCard";
import ChallengeTypeBar from "@/components/challanges/ChallengeTypeBar";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import challanges from "@/data/fake/challanges";
import { useOptimistic, startTransition, useState } from "react";

export default function ChallengePage() {
    const [selectedType, setSelectedType] = useState("جميع التحديات");

    const [optimisticChallenges, setOptimisticChallanges] = useOptimistic(
        challanges,
        (currentChallanges, selected:string) => {
            if (selected === "جميع التحديات") return challanges;
            return currentChallanges.filter((c) => c.type === selected);
        }
    );

    const handleTypeChange = async(type: string) => {
        startTransition(() => {
            setOptimisticChallanges(type);
            setSelectedType(type);
        });
    };

    return (
        <Container className="py-12">
            <SectionTitle
                title="تحديات البرمجة"
                subtitle="اكتشف تحديات جديدة وطور مهاراتك البرمجية من خلال حلول رائعة."
            />

            <ChallengeTypeBar activeType={selectedType} onTypeChange={handleTypeChange} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {optimisticChallenges.map((challenge) => (
                    <ChallengeCard key={challenge.id} {...challenge} />
                ))}
            </div>
        </Container>
    );
}