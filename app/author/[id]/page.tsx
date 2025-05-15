import Container from '@/components/ui/Container';
import { UserHeader } from '@/components/user-public-profile/UserHeader';
import { UserSkills } from '@/components/user-public-profile/UserSkills';
import { UserSocialMedia } from '@/components/user-public-profile/UserSocialMedia';
import { UserStats } from '@/components/user-public-profile/UserStats';
import { getUserProfilePublic } from '@/lib/user';
import { notFound } from 'next/navigation';
import React from 'react'

export default async function page({params}:{params:Promise<{id:string}>}) {
    const {id} = await params ;
    const user = await getUserProfilePublic(+id)
    if(!user)notFound() 
    else
    return (
        <Container className='py-6'>
            <UserHeader name={user.name} image={user.image} bio={user.bio} points={user.points} jointAt={user.createdAt}/>
            <UserStats
            comments={user.commentsCount}
            articles={user.articlesViewed}
            questions={user.questionsViewed}
            history={user.pointsHistoryCount}
            />
            <UserSkills skills={user.skills} />
            <UserSocialMedia links={user.socialmedias} />
        </Container>
    )
}
