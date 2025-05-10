import InfoBlock from "@/components/InfoBlock";
import Container from "@/components/ui/Container";
import { Metadata } from 'next';
import { projectName } from '@/utils/constants';

export const metadata: Metadata = {
    title: `سياسة الخصوصية | ${projectName}`,
    description: 'تعرف على كيفية جمع واستخدام وحماية بياناتك الشخصية من خلال سياسة الخصوصية الخاصة بنا.',
};

export default function page() {
    return (
        <Container className="bg-light text-dark py-12">
            <div className="max-w-4xl mx-auto space-y-10">
                <h1 className="text-3xl font-bold text-primary text-center">سياسة الخصوصية</h1>

                <p className="text-muted text-lg leading-relaxed text-center">
                    نحن نحترم خصوصيتك ونسعى لتعزيز الثقة على الإنترنت. توضح هذه السياسة كيف نجمع بياناتك الشخصية ونستخدمها ونحميها.
                </p>

                <InfoBlock title="المعلومات التي نجمعها">
                    <p className="text-muted">
                        نقوم بجمع بعض البيانات عند استخدامك للموقع مثل:
                    </p>
                    <ul className="list-disc pl-6 text-muted space-y-1">
                        <li>📧 الاسم الكامل</li>
                        <li>📨 البريد الإلكتروني</li>
                        <li>🌐 عنوان الـ IP</li>
                    </ul>
                </InfoBlock>

                <InfoBlock title="كيفية استخدام البيانات">
                    <p className="text-muted">
                        تُستخدم بياناتك لتحسين تجربتك على الموقع، مثل تخصيص المحتوى، إدارة حسابك، وتحليل أداء المنصة. لا نشارك بياناتك مع أي طرف خارجي.
                    </p>
                </InfoBlock>

                <InfoBlock title="حماية البيانات">
                    <p className="text-muted">
                        نحن نستخدم تقنيات أمان متقدمة لحماية معلوماتك من الوصول غير المصرح به. ولا يمكن الوصول إلى بياناتك إلا من قبل عدد محدود من الموظفين للقيام بمهامهم.
                    </p>
                </InfoBlock>

                <InfoBlock title="مسؤوليتك كمستخدم">
                    <p className="text-muted">
                        نوصي بحماية بياناتك الشخصية مثل اسم المستخدم وكلمة المرور، وتجنب مشاركتها مع أي شخص آخر.
                    </p>
                </InfoBlock>

                <InfoBlock title="حقوق المستخدم">
                    <p className="text-muted">
                        يحق لك طلب حذف بياناتك في أي وقت من خلال التواصل معنا، وسنعمل على معالجة الطلب بأسرع وقت ممكن.
                    </p>
                </InfoBlock>
            </div>
        </Container>
    );
}