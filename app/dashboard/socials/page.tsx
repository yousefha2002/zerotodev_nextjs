import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import Shadow from '@/components/ui/Shadow';
import { Metadata } from 'next';
import { projectName } from '@/utils/constants';
import SocialLinksEditor from '@/components/dashboard/SocialLinksEditor';
import { getUserSocialMedia } from '@/lib/social-media';

export const metadata: Metadata = {
    title: `تعديل مواقع التواصل | ${projectName}`,
    description: 'أضف أو عدل روابط مواقع التواصل الخاصة بك لعرضها في ملفك الشخصي.',
};

export default async function page() {
    const socialLinks = await getUserSocialMedia()
    return (
        <Container className="py-12">
            <SectionTitle title="تعديل مواقع التواصل" />
            <Shadow className="bg-white py-8">
                <SocialLinksEditor socialLinks={socialLinks}/>
            </Shadow>
        </Container>
    );
}