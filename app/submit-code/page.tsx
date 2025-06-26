import Container from '@/components/ui/Container';
import Shadow from '@/components/ui/Shadow';
import SubmitCodeForm from '@/components/user-auth/SubmitCodeForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `إرسال رمز التحقق`,
    description:"التحقق من رمز التفعيل لاعادة تعيين كلمة المرور"
};



export default function VerifyCodePage() {

  return (
    <Container className='py-10'>
      <Shadow className=' bg-white p-8'>
            <h2 className="text-2xl font-bold text-dark mb-4">التحقق من الرمز</h2>
            <p className="text-muted mb-6">
              أدخل رمز التحقق الذي تم إرساله إلى بريدك الإلكتروني.
            </p>
            <SubmitCodeForm/>
      </Shadow>
    </Container>
  );
}
