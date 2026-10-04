import type { MetadataRoute } from 'next';

const baseUrl = 'https://usecountme.com';
const locales = ["pt", "en", "es"];

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = ["", "/sobre", "/politica-privacidade"];

    return locales.flatMap((locale) => routes.map((route) => ({
        url: `${baseUrl}/${locale}/${route}`,
        changeFrequency: route === "" ? "weekly" : "yearly",
        priority: route === "" ? 1 : 0.5,
    })));
}