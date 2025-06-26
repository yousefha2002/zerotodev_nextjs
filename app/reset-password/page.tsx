import Container from '@/components/ui/Container';
import Shadow from '@/components/ui/Shadow';
import ResetPasswordForm from '@/components/user-auth/ResetPasswordForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `إعاجدة تعيين كلمة المرور`,
    description: "إعادة تعيين كلمة المرور بعد ان مجح التحقق من رمز التأكيد"
};

export default function page() {
  return (
    <Container className='py-10'>
      <Shadow className=' bg-white p-8'>
            <h2 className="text-2xl font-bold text-dark mb-4">إعادة تعيين كلمة المرور</h2>
            <ResetPasswordForm/>
      </Shadow>
    </Container>
  );
}
