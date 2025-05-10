import React from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import CommentItem from "@/components/dashboard/CommentItem";
import { getUserComments } from "@/lib/comment";
import NotFoundText from "@/components/ui/NotFoundText";
import { Metadata } from "next";
import { projectName } from "@/utils/constants";

export const metadata: Metadata = {
    title: `تعليقاتي | ${projectName}`,
    description: 'استعرض جميع التعليقات التي قمت بإضافتها على المقالات والتحديات وكن جزءاً من الحوار.',
};

export default async function Page() {
    const comments = await getUserComments();
    return (
        <Container className="py-10">
            <SectionTitle
                title="تعليقاتي"
                subtitle="هنا يمكنك مشاهدة جميع التعليقات التي قمت بإضافتها على المقالات أو التحديات."
            />

            {
                comments.length > 0
                ?
                <div className="space-y-6 mt-8">
                    {comments.map((comment) => (
                        <CommentItem
                            key={comment.id}
                            comment={comment}
                        />
                    ))}
                </div>
                :
                <NotFoundText/>
            }
        </Container>
    );
}