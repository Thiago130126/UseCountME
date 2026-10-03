import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://usecountme.com';

    return [
        {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1.0,
        },
        {
        url: `${baseUrl}/sobre`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.8,
        },
        {
        url: `${baseUrl}/politica-de-privacidade`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.5,
        },
    ];
}