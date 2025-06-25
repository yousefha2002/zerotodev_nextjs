import Container from '@/components/ui/Container';
import Shadow from '@/components/ui/Shadow';
import RequestCodeForm from '@/components/user-auth/Request-CodeForm';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: `طلب رمز التحقق`,
    description: "إرسال كود تحقق الى الإيميل لإعادة تعيين كلمة المرور"
};

export default function page() {

  return (
    <Container className=' py-10'>
        <Shadow className=' bg-white p-8'>
            <h1 className="text-2xl font-semibold text-dark mb-2">إعادة تعيين كلمة المرور</h1>
        <p className="text-muted mb-6">
          سنقوم بإرسال رمز تحقق إلى بريدك الإلكتروني. استخدم هذا الرمز لتأكيد هويتك وإعادة تعيين كلمة المرور الخاصة بك.
        </p>
        <RequestCodeForm/>
        </Shadow>
    </Container>
  );
}
