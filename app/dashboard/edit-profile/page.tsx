import EditProfileForm from '@/components/dashboard/froms/EditProfileForm'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import Shadow from '@/components/ui/Shadow'
import React from 'react'

export default function page() {
    return (
        <Container className='py-12'>
            <SectionTitle
                title='تعديل الملف الشخصي'
            />
            <Shadow className='bg-white py-8'>
                <EditProfileForm/>
            </Shadow>
        </Container>
    )
}
