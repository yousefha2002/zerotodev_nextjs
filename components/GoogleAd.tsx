'use client'
import React, { useEffect, useRef } from 'react';

interface GoogleAdProps {
    slot: string;
    className?: string;
    format?: string;
    responsive?: boolean;
}

const GoogleAd: React.FC<GoogleAdProps> = ({
    slot,
    className = '',
    format = 'auto',
    responsive = true,
}) => {
    const adRef = useRef<HTMLModElement>(null);

    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            try {
                // @ts-ignore
                if (window.adsbygoogle && adRef.current) {
                    if (!(adRef.current as any).dataset.adRendered) {
                        // @ts-ignore
                        window.adsbygoogle.push({});
                        (adRef.current as any).dataset.adRendered = 'true';
                    }
                }
            } catch (e) {
                console.error('Adsense error:', e);
            }
        }
    }, []);

    if (process.env.NODE_ENV !== 'production') {
        // إعلان وهمي في وضع التطوير
        return (
            <div
                className={`my-8 border border-gray-300 bg-gray-100 rounded-md flex items-center justify-center ${className}`}
                style={{ height: 100, color: '#888', fontSize: 16, fontWeight: 'bold' }}
            >
                إعلان تجريبي - مساحة إعلانية
            </div>
        );
    }

    // إعلان حقيقي في الإنتاج
    return (
        <div className='my-8'>
            <ins
                ref={adRef}
                className={`adsbygoogle ${className}`}
                style={{ display: 'block' }}
                data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
                data-ad-slot={slot}
                data-ad-format={format}
                data-full-width-responsive={responsive ? 'true' : 'false'}
            />
        </div>
    );
};

export default GoogleAd;