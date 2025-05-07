import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import Shadow from '@/components/ui/Shadow'
import RequestQuestionForm from '@/components/user-auth/RequestQuestionForm'
import React from 'react'

export default async function page() {
    return (
        <Container className='py-10'>
            <Shadow className='bg-white py-8'>
                <SectionTitle title='أرسل سؤالك الآن'/>
                <RequestQuestionForm/>
            </Shadow>
        </Container>
    )
}
