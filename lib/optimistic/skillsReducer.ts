import { Skill } from '@/types/Skill';

type OptimisticAction =
    | { type: 'delete'; id: number }
    | { type: 'add'; skill: Skill };

export function skillsReducer(
    currentSkills: Skill[],
    action: OptimisticAction
): Skill[] {
    switch (action.type) {
        case 'delete':
            return currentSkills.filter((skill) => skill.id !== action.id);
        case 'add':
            return [action.skill, ...currentSkills];
        default:
            return currentSkills;
    }
}