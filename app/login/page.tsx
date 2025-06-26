import Container from '@/components/ui/Container';
import Link from 'next/link';
import SectionTitle from '@/components/ui/SectionTitle';
import LoginForm from '@/components/user-auth/LoginForm';
import Shadow from '@/components/ui/Shadow';
import { Metadata } from 'next';
import { projectName } from '@/utils/constants';

export const metadata: Metadata = {
    title: `تسجيل الدخول | ${projectName}`,
    description: 'تسجيل الدخول إلى حسابك للوصول إلى التحديات والمحتوى التعليمي الخاص بك.',
};

export default function LoginPage() {
    return (
        <Container className="py-10">
            <Shadow className="bg-white p-8">
                <SectionTitle title='تسجيل الدخول'/>

                <LoginForm/>
                <div className="flex justify-center items-center gap-4 mt-4 text-sm text-muted">
                    <Link
                        href="/request-code"
                        className="text-primary font-medium hover:underline"
                    >
                        نسيت كلمة المرور ؟
                    </Link>
                    <span>|</span>
                    <Link
                        href="/register"
                        className="text-primary font-medium hover:underline"
                    >
                        إنشاء حساب جديد
                    </Link>
                    </div>
            </Shadow>
        </Container>
    );
}