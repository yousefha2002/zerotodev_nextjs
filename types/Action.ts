import { FaUserEdit} from 'react-icons/fa';
export type Action = {
    label: string;
    href: string;
    icon: { component: typeof FaUserEdit; size: number,color:string }; 
    bg: string;
};