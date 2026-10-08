import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://www.usecountme.com';

    return {
        rules: {
        userAgent: '*',
        allow: '/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}