import QuestionsList from '@/components/questions/QuestionsList'
import RandomQuestions from '@/components/questions/RandomQuestions'
import TopQuestions from '@/components/questions/TopQuestions'
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import { getLatestQuestions, getQuestions, getRandomQuestions } from '@/lib/questions'
import NotFoundText from '@/components/ui/NotFoundText'
import { Metadata } from 'next'
import { projectName } from '@/utils/constants'
import React from 'react'
import GoogleAd from '@/components/GoogleAd'
import SearchByNameForm from '@/components/ui/forms/SearchByNameFor'

type Props = {
    searchParams: Promise<{ page?: string; category?: string, name?:string }>;
};

export const metadata: Metadata = {
    title: `الأسئلة | ${projectName}`,
    description: "استعرض أكثر الأسئلة شيوعاً في مجال البرمجة، وتعلم من إجاباتها المقدمة من المبرمجين والمجتمع التقني.",
};

export default async function page({searchParams}: Props) {
    const search = await searchParams;
    const page = search.page ? +search.page : 1;
    const name = search.name ? search.name : undefined;

    const [rows, latestQuestions, randomQuestions] = await Promise.all([
        getQuestions(page, 5,name),
        getLatestQuestions(3),
        getRandomQuestions(3),
    ]);

    return (
        <Container className='py-12'>
            <SectionTitle
                title="الأسئلة والأجوبة"
                subtitle="اكتشف الأسئلة الشائعة وأجوبتها في مختلف مجالات البرمجة والتكنولوجيا."
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Sidebar */}
                <div className="lg:col-span-4 flex flex-col gap-8">
                    <SearchByNameForm/>
                    <TopQuestions questions={latestQuestions} />
                    <RandomQuestions questions={randomQuestions} />
                    <GoogleAd slot="1234567897" marginClass="my-2" />
                </div>

                {/* Question List */}
                <div className="lg:col-span-8 flex flex-col gap-8">
                    {rows.questions.length > 0 ? (
                        <QuestionsList
                            questions={rows.questions}
                            currentPage={page}
                            totalPages={rows.totalPages}
                        />
                    ) : (
                        <NotFoundText />
                    )}
                </div>
            </div>
        </Container>
    );
}