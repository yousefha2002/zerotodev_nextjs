import Container from '@/components/ui/Container';
import Link from 'next/link';
import SectionTitle from '@/components/ui/SectionTitle';
import LoginForm from '@/components/user-auth/LoginForm';
import Shadow from '@/components/ui/Shadow';

export default function LoginPage() {
    return (
        <Container className="py-10">
            <Shadow className="bg-white p-8">
                <SectionTitle title='تسجيل الدخول'/>

                <LoginForm/>
                <p className="text-center text-sm text-muted mt-4">
                    ليس لديك حساب ؟{' '}
                    <Link
                        href="/register"
                        className="text-primary font-medium hover:underline"
                    >
                        انشاء حساب
                    </Link>
                </p>
            </Shadow>
        </Container>
    );
}