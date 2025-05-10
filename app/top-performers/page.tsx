import PerformerCard from '@/components/performer/PerformerCard';
import Container from '@/components/ui/Container'
import NotFoundText from '@/components/ui/NotFoundText';
import SectionTitle from '@/components/ui/SectionTitle'
import { getTopUsers } from '@/lib/user';

export default async function page() {
    const users = await getTopUsers()
    return (
        <Container className="py-12">
            <SectionTitle
                title="المتصدرين"
                subtitle="اكتشف المتصدرين في التحديات والاختبارات."
            />

            {
                users.length>0
                ?
                <div className="space-y-6 max-w-xl mx-auto">
                    {users.map((user) => (
                        <PerformerCard key={user.id} user={user} />
                    ))}
                </div>
                :
                <NotFoundText/>
            }
        </Container>
    )
}