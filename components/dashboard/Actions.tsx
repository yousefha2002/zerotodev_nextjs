import React from 'react';
import ActionCard from './ActionCard';
import actions from '@/data/actions';

export default function Actions() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
            {actions.map((action, idx) => <ActionCard {...action} key={idx}/>)}
        </div>
    );
}