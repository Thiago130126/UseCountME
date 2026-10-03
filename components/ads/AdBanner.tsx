// components/ads/AdBanner.tsx
'use client';

import { useEffect } from 'react';

declare global {
    interface Window {
        adsbygoogle: unknown[];
    }
}

interface AdBannerProps {
    dataAdSlot: string;
    dataAdFormat?: string;
    dataFullWidthResponsive?: boolean;
}

export default function AdBanner({
    dataAdSlot,
    dataAdFormat = 'auto',
    dataFullWidthResponsive = true,
}: AdBannerProps) {
    useEffect(() => {
        try {
        // Notifica o Google Adsense para carregar o anúncio neste bloco
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});

        } catch (err) {
        console.error('Erro ao carregar anúncio AdSense:', err);
        }
    }, []);

    return (
        <div style={{ margin: '20px 0', textAlign: 'center' }}>
        <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // Seu ID do AdSense
            data-ad-slot={dataAdSlot}
            data-ad-format={dataAdFormat}
            data-full-width-responsive={dataFullWidthResponsive ? 'true' : 'false'}
        />
        </div>
    );
}