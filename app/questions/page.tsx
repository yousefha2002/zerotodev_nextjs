import QuestionsList from '@/components/questions/QuestionsList'
import RandomQuestions from '@/components/questions/RandomQuestions'
import TopQuestions from '@/components/questions/TopQuestions'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import questions from '@/data/fake/questions'
import React from 'react'

export default function page() {
    return (
        <Container className='py-12'>
            <SectionTitle
                title="الأسئلة والأجوبة"
                subtitle="اكتشف الأسئلة الشائعة وأجوبتها في مختلف مجالات البرمجة والتكنولوجيا."
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Sidebar */}
                <div className="lg:col-span-4 flex flex-col gap-8">
                    <TopQuestions/>
                    <RandomQuestions/>
                </div>

                {/* Article List */}
                <div className="lg:col-span-8 flex flex-col gap-8">
                    <QuestionsList 
                        questions={questions}
                        currentPage={1}
                        totalPages={5}
                    />
                </div>
            </div>
        </Container>
    )
}
