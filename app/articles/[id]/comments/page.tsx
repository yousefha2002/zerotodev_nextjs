import CommentsPage from '@/components/comments/CommentPage';
import { ItemType } from '@/utils/enums/ItemType';

type Props = {
    searchParams: Promise<{ page?: string }>;
    params: Promise<{ id: string }>;
};

export default async function page({ params, searchParams }: Props) {
    const { id } = await params;
    const search = await searchParams;
    const page = search.page ? +search.page : 1;

return (
    <CommentsPage
        itemId={+id}
        itemType={ItemType.article}
        page={page}
        />
    );
}