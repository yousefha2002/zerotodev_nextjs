"use client";
import Shadow from "@/components/ui/Shadow";

const types = ["جميع التحديات", "JavaScript", "Python", "Java", "C++", "HTML", "CSS", "React"];

export default function ChallengeTypeBar({
    activeType,
    onTypeChange
}: {
    activeType: string;
    onTypeChange: (type: string) => void;
}) {
    return (
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide mb-8 justify-center">
            {types.map((type) => {
                const isActive = type === activeType;

                return (
                    <button
                        key={type}
                        onClick={() => onTypeChange(type)}
                    >
                        <Shadow
                            className={`shrink-0 px-5 py-2 border rounded-full cursor-pointer transition-all whitespace-nowrap text-sm font-medium
                            ${isActive ? "text-white bg-primary" : "bg-white border-gray-200 hover:bg-primary hover:text-white"}`}
                        >
                            {type}
                        </Shadow>
                    </button>
                );
            })}
        </div>
    );
}