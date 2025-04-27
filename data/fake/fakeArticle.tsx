export default {
    title: "فهم جملة if في JavaScript",
    description:
        "تُعد جملة if من الأساسيات في أي لغة برمجة، وفي هذا المقال سنشرح كيفية استخدامها في JavaScript مع أمثلة عملية.",
        content: `
        <p>تُستخدم جملة <code>if</code> لاتخاذ قرارات في كود JavaScript. حيث تقوم بتنفيذ الكود داخلها فقط إذا تحقق الشرط.</p>
    
        <h2>مثال بسيط:</h2>
        <pre dir="ltr""><code class="language-js">
    const age = 18;
    
    if (age >= 18) {
        console.log("مرحبًا بك! يمكنك الدخول.");
    }
        </code></pre>
    
        <p>في المثال أعلاه، الشرط هو <code>age >= 18</code>. إذا كان العمر أكبر أو يساوي 18 سيتم طباعة رسالة ترحيب.</p>
    
        <h2>استخدام else:</h2>
        <pre dir="ltr"><code class="language-js">
    const age = 16;
    
    if (age >= 18) {
        console.log("مرحبًا بك!");
    } else {
        console.log("عذرًا، لا يمكنك الدخول.");
    }
        </code></pre>
    
        <p>نستخدم <code>else</code> لتحديد ماذا سيحدث إذا لم يتحقق الشرط.</p>
    
        <blockquote>
            تذكر: كتابة الشروط بطريقة واضحة يجعل كودك أسهل للفهم والصيانة.
        </blockquote>
    `,
    author: "يوسف أبوهاني",
    category: "JavaScript",
    date: "2024-03-15",
    image: "/images/hero.png",
};