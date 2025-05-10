import InfoBlock from "@/components/InfoBlock";
import Container from "@/components/ui/Container";
import { projectName } from "@/utils/constants";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: `من نحن | ${projectName}`,
    description: 'تعرف على فريقنا وفكرة موقعنا الذي يهدف إلى مساعدة المبرمجين العرب من خلال مقالات، كويزات، وأدوات تعليمية.',
};

export default function page() {
    return (
        <Container className="bg-light text-dark py-12">
            <div className="max-w-4xl mx-auto space-y-10">
                <header className="text-center space-y-4">
                    <h1 className="text-3xl font-bold text-primary">من نحن</h1>
                    <p className="text-muted text-lg leading-relaxed">
                        نحن فريق من المطورين الشغوفين قررنا مشاركة رحلتنا وخبراتنا لمساعدة المبرمجين على التطور خطوة بخطوة.
                    </p>
                </header>

                <InfoBlock title="فكرة الموقع">
                    <p className="text-muted">
                        {projectName} هو موقع عربي يقدم مقالات مفيدة، كويزات تفاعلية لتحديد المستوى، ومساحة لطرح الأسئلة البرمجية والحصول على إجابات موثوقة.
                    </p>
                </InfoBlock>

                <InfoBlock title="من نحن؟">
                    <p className="text-muted">
                        نحن يوسف ومحمد، خريجا كلية الهندسة – دفعة 2025 من فلسطين. نعمل في تطوير الويب ونتخصص في React.js، Next.js، وNestJS.
                        أطلقنا هذا المشروع بدافع شغفنا بمشاركة المعرفة ومساعدة غيرنا من المبرمجين، خاصة المبتدئين.
                    </p>
                </InfoBlock>

                <InfoBlock title={`لماذا ${projectName}؟`}>
                    <ul className="list-disc pl-6 text-muted space-y-2">
                        <li>✍️ محتوى بسيط وواضح</li>
                        <li>🧠 اختبارات تفاعلية لتحديد مستواك</li>
                        <li>❓ إمكانية طرح الأسئلة والحصول على إجابات مفيدة</li>
                        <li>📱 واجهة سهلة الاستخدام ومريحة</li>
                    </ul>
                </InfoBlock>

                <InfoBlock title="رؤيتنا المستقبلية">
                    <p className="text-muted">
                        نطمح إلى إضافة دورات تعليمية منظمة، وتطوير المنصة لتشمل أدوات ومصادر إضافية تعزز من تجربة التعلم.
                    </p>
                </InfoBlock>
            </div>
        </Container>
    );
}