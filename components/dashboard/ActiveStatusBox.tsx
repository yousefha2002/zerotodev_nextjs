type Props = {
    active: boolean;
};

export default function ActiveStatusBox({ active }: Props) {
  if (active) return null;

  return (
    <div className="bg-danger/10 text-danger border border-danger p-4 rounded-2xl shadow-md mb-8">
    <h2 className="text-lg font-semibold">الحساب غير مفعل</h2>
      <p className="text-muted mt-1">
            لا يمكنك تنفيذ أي إجراءات في الوقت الحالي. يرجى التواصل معنا للحصول على المزيد من التفاصيل أو تفعيل الحساب.
      </p>
    </div>
  );
}
