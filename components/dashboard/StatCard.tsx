import React from 'react';

interface StatCardProps {
    icon: React.ReactNode;
    value: number;
    label: string;
}

const StatCard = ({ icon, value, label }: StatCardProps) => {
    return (
        <div className="bg-white shadow rounded-xl p-5 flex items-center space-x-4">
            <div className="text-3xl">{icon}</div>
            <div>
                <p className="text-lg font-semibold text-dark">{value}</p>
                <p className="text-sm text-muted">{label}</p>
            </div>
        </div>
    );
};

export default StatCard;