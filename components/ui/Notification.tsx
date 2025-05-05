import React, { useState, useEffect } from 'react';

type NotificationProps = {
    message: string;
    type: 'success' | 'error';
};

const Notification: React.FC<NotificationProps> = ({ message, type }) => {
const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
        setIsVisible(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div
        className={`fixed top-0 left-0 right-0 p-4 z-50 transition-all ${
            type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white text-center`}
        >
        <div className="flex justify-between items-center">
            <span>{message}</span>
            <button
            onClick={() => setIsVisible(false)} // إخفاء الرسالة عند الضغط
            className="text-white font-bold ml-4"
            >
            ×
            </button>
        </div>
        </div>
    );
};

export default Notification;