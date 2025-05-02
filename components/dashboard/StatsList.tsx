import React from 'react';
import StatCard from './StatCard';

export default function StatsList() {
    const stats = [
        {
            label: 'النقاط',
            value: 5,
            icon: '📘',
        },
        {
            label: 'التعليقات',
            value: 7,
            icon: '✅',
        },
        {
            label: 'المقالات',
            value: 12,
            icon: '📅',
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, idx) => <StatCard {...stat} key={idx}/>)}
        </div>
    );
}