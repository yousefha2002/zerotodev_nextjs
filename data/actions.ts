import { FaUserEdit, FaEnvelope, FaLock,FaListAlt } from 'react-icons/fa';

export default [
    {
        label: 'تعديل الملف الشخصي',
        href: '/dashboard/edit-profile',
        icon: {
            component: FaUserEdit, 
            size: 24,  // Icon size (adjust as needed)
            color: '#0288D1',  // Blue color
        },
        bg: '#E1F5FE',  // Light blue background
    },
    {
        label: 'تعديل البريد الالكتروني',
        href: '/dashboard/edit-email',
        icon: {
            component: FaEnvelope,
            size: 24,  // Icon size (adjust as needed)
            color: '#388E3C',  // Green color
        },
        bg: '#E8F5E9',  // Light green background
    },
    {
        label: 'تعديل كلمة المرور',
        href: '/dashboard/edit-password',
        icon: {
            component: FaLock,
            size: 24,  // Icon size (adjust as needed)
            color: '#D32F2F',  // Red color
        },
        bg: '#FFEBEE',  // Light red background
    },
    {
        label: 'عرض النقاط',
        href: '/dashboard/points',
        icon: {
            component: FaLock,
            size: 24,  // Icon size (adjust as needed)
            color: '#FF5722',  // Orange color
        },
        bg: '#FFCCBC',  // Light orange background
    },
    {
        label: 'عرض التعليقات',
        href: '/dashboard/comments',
        icon: {
            component: FaLock,
            size: 24,  // Icon size (adjust as needed)
            color: '#9C27B0',  // Purple color (different from red)
        },
        bg: '#F3E5F5',  // Light purple background
    },
    {
        label: 'عرض الكويزات',
        href: '/dashboard/quizzes',
        icon: {
            component: FaListAlt,  // أيقونة الكويزات
            size: 24,
            color: '#00BCD4',  // لون سماوي جميل
        },
        bg: '#B2EBF2',  // خلفية سماوية فاتحة
    }
];