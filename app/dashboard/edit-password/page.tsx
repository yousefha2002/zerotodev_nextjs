import EditPasswordForm from '@/components/dashboard/froms/EditPasswordForm';
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle';
import Shadow from '@/components/ui/Shadow'
import React from 'react'

export default function page() {
    return (
        <Container className='py-12'>
            <Shadow className='bg-white py-8'>
                <SectionTitle
                title='تعديل كلمة المرور '/>
                <EditPasswordForm/>
            </Shadow>
        </Container>
    )
}