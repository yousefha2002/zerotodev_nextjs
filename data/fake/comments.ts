export type CommentType = "مقال" | "تحدي";

interface Comment {
  id: number;
  type: CommentType;
  relatedTitle: string;
  content: string;
  date: string;
}

const comments: Comment[] = [
  {
    id: 1,
    type: "مقال",
    relatedTitle: "مقدمة في البرمجة بلغة JavaScript",
    content: "مقال رائع! استفدت كثيرًا من الشرح المبسط.",
    date: "2025-04-25",
  },
  {
    id: 2,
    type: "تحدي",
    relatedTitle: "تحدي المتغيرات في JavaScript",
    content: "واجهت صعوبة بسيطة لكن التحدي مفيد جدًا.",
    date: "2025-04-26",
  },
  {
    id: 3,
    type: "مقال",
    relatedTitle: "أهمية تعلم البرمجة للأطفال",
    content: "مقال محفز جدًا، شكراً لكم!",
    date: "2025-04-27",
  },
];

export default comments;
