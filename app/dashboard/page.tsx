import Actions from '@/components/dashboard/Actions'
import StatsList from '@/components/dashboard/StatsList'
import UserCard from '@/components/dashboard/UserCard'
import Container from '@/components/ui/Container'
import { getCurrentUser, getUserStats } from '@/lib/user'
import { Metadata } from 'next'
import { projectName } from '@/utils/constants'

export const metadata: Metadata = {
    title: `لوحة التحكم | ${projectName}`,
    description: 'إدارتك الشخصية لحسابك. هنا يمكنك متابعة إحصائياتك، القيام بالإجراءات المختلفة، والتفاعل مع تفاصيل حسابك.',
};

export default async function page() {
    const [user, stats] = await Promise.all([
        getCurrentUser(),
        getUserStats()
    ])
    return (
        <Container className='py-10'>
            <Actions />
            <StatsList stats={stats} />
            <UserCard user={user} />
        </Container>
    )
}