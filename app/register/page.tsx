import Container from '@/components/ui/Container';
import Shadow from '@/components/ui/Shadow';
import SectionTitle from '@/components/ui/SectionTitle';
import RegisterForm from '@/components/user-auth/RegisterForm';

export default function page() {
    return (
        <Container className="py-10">
            <Shadow className="bg-white p-8">
                <SectionTitle title="إنشاء حساب"/>
                <RegisterForm/>
            </Shadow>
        </Container>
    );
}