import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import Shadow from '@/components/ui/Shadow'
import RequestQuestionForm from '@/components/user-auth/RequestQuestionForm'
import React from 'react'
import { Metadata } from 'next';
import { projectName } from '@/utils/constants';

export const metadata: Metadata = {
    title: `أرسل سؤالك | ${projectName}`,
    description: 'هل لديك سؤال؟ قم بإرساله الآن وسنقوم بالرد عليك في أقرب وقت ممكن.',
};

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