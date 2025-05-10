import EditProfileForm from '@/components/dashboard/froms/EditProfileForm'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import Shadow from '@/components/ui/Shadow'
import { getCurrentUser } from '@/lib/user'
import { Metadata } from 'next'
import { projectName } from '@/utils/constants'

export const metadata: Metadata = {
    title: `تعديل الملف الشخصي | ${projectName}`,
    description: 'قم بتحديث بياناتك الشخصية مثل اسمك، بريدك الإلكتروني، وصورتك الشخصية لتحسين تجربة المستخدم على الموقع.',
};

export default async function page() {
    const user = await getCurrentUser()
    return (
        <Container className='py-12'>
            <SectionTitle
                title='تعديل الملف الشخصي'
            />
            <Shadow className='bg-white py-8'>
                <EditProfileForm user={user} />
            </Shadow>
        </Container>
    )
}