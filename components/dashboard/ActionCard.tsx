import { Action } from '@/types/Action';
import Link from 'next/link';
import React from 'react';

const ActionCard = ({ label, href, icon, bg }: Action) => {
    return (
        <Link href={href}>
            <div
                className={`cursor-pointer p-5 rounded-xl shadow-sm border border-gray-200 transition duration-200`}
                style={{backgroundColor:bg}}
            >
                <div className="flex items-center gap-4">
                    <div className="p-2 bg-white rounded-full shadow">
                    <icon.component 
                            style={{
                                fontSize: icon.size,  
                                color: icon.color,
                            }} 
                        />
                    </div>
                    <div>
                        <p className="text-muted font-semibold">{label}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ActionCard;