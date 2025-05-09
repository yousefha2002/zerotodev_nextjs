import React from 'react';
import StatCard from './StatCard';
import { UserStats } from '@/types/User';

export default function StatsList({stats}:{stats:UserStats}) {
    const statstics = [
        {
            label: 'النقاط',
            value: stats.points,
            icon: '📘',
        },
        {
            label: 'التعليقات',
            value: stats.commentsCount,
            icon: '✅',
        },
        {
            label: 'المقالات',
            value: stats.articleViewsCount,
            icon: '📅',
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {statstics.map((stat, idx) => <StatCard {...stat} key={idx}/>)}
        </div>
    );
}