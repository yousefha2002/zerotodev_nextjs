import { Skill } from "@/types/Skill";
import Shadow from "../ui/Shadow";

export function UserSkills({ skills }: {skills:Skill[]}) {
    if (skills.length === 0) return null;
    return (
        <Shadow className="bg-white my-6">
            <h2 className="text-lg font-semibold mb-2">المهارات</h2>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                <span
                    key={skill.id}
                    className="bg-primary/10 text-primary text-sm px-3 py-1 rounded-full"
                >
                    {skill.title}
                </span>
                ))}
            </div>
        </Shadow>
    );
}