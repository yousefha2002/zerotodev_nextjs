import PerformerCard from '@/components/performer/PerformerCard';
import Container from '@/components/ui/Container'
import SectionTitle from '@/components/ui/SectionTitle'
import { users } from '@/data/fake/users';

export default function page() {
    return (
        <Container className="py-12">
            <SectionTitle
                title="المتصدرين"
                subtitle="اكتشف المتصدرين في التحديات والاختبارات."
            />

            <div className="space-y-6 max-w-xl mx-auto">
                {users.map((p) => (
                    <PerformerCard key={p.id} name={p.name} points={p.points} image={p.image} />
                ))}
            </div>
        </Container>
    )
}