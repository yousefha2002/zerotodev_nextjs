import React from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import CommentItem from "@/components/dashboard/CommentItem";
import comments from "@/data/fake/comments";

export default function Page() {
    return (
        <Container className="py-10">
            <SectionTitle
                title="تعليقاتي"
                subtitle="هنا يمكنك مشاهدة جميع التعليقات التي قمت بإضافتها على المقالات أو التحديات."
            />

            <div className="space-y-6 mt-8">
                {comments.map((comment) => (
                <CommentItem
                    key={comment.id}
                    content={comment.content}
                    type={comment.type}
                    relatedTitle={comment.relatedTitle}
                    date={comment.date}
                />
                ))}
            </div>
        </Container>
    );
}
