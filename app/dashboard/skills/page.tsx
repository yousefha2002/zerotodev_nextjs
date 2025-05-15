import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Shadow from '@/components/ui/Shadow';
import { Metadata } from 'next';
import { projectName } from '@/utils/constants';
import SkillsEditor from '@/components/dashboard/SkillsEditor';
import { getUserSkills } from '@/lib/skill';

export const metadata: Metadata = {
    title: `تعديل المهارات | ${projectName}`,
    description: 'أضف أو عدل المهارات الخاصة بك لعرضها في ملفك الشخصي.',
};

export default async function page() {
    const skills = await getUserSkills();
    return (
        <Container className="py-12">
            <SectionTitle title="تعديل المهارات" />
            <Shadow className="bg-white py-8">
                <SkillsEditor skills={skills} />
            </Shadow>
        </Container>
    );
}