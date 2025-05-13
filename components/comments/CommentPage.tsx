// components/comments/CommentsPage.tsx
import CommentLayout from './CommentLayout';
import Container from '../ui/Container';
import Pagination from '../ui/Pagination';
import { getUserAuth } from '@/lib/auth';
import { getCommentsByItemId } from '@/lib/comment';
import { ItemType } from '@/utils/enums/ItemType';

type Props = {
    itemId: number;
    itemType: ItemType;
    page: number;
};

export default async function CommentsPage({ itemId, itemType, page }: Props) {
    const currentUserAuth = await getUserAuth();
    const currentUserId = currentUserAuth ? +currentUserAuth.value : undefined;

    const rows = await getCommentsByItemId(page, 10, itemType, itemId);

    return (
        <Container className="py-8">
            <CommentLayout comments={rows.comments} currentUserId={currentUserId} />
            {rows.totalPages > 0 && (
                <Pagination currentPage={page} totalPages={rows.totalPages} />
            )}
        </Container>
    );
}