import EditEmailForm from '@/components/dashboard/froms/EditEmailForm';
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle';
import Shadow from '@/components/ui/Shadow'
import { Metadata } from 'next'
import { projectName } from '@/utils/constants'

export const metadata: Metadata = {
    title: `تعديل البريد الإلكتروني | ${projectName}`,
    description: 'قم بتحديث بريدك الإلكتروني لتلقي التنبيهات والرسائل المتعلقة بحسابك على الموقع.',
};

export default function page() {
    return (
        <Container className='py-12'>
            <Shadow className='bg-white py-8'>
                <SectionTitle
                    title='تعديل البريد الالكتروني'
                />
                <EditEmailForm />
            </Shadow>
        </Container>
    )
}