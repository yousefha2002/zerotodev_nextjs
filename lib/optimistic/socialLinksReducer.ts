import { SocialLink } from '@/types/SocialLink';

type OptimisticAction =
    | { type: 'delete'; id: number }
    | { type: 'add'; socialLink: SocialLink };

    export function socialLinksReducer(
    currentLinks: SocialLink[],
    action: OptimisticAction
    ): SocialLink[] {
    switch (action.type) {
        case 'delete':
        return currentLinks.filter((link) => link.id !== action.id);
        case 'add':
        return [action.socialLink, ...currentLinks];
        default:
        return currentLinks;
    }
}