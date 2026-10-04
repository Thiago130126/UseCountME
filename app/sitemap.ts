import type { MetadataRoute } from "next";
import {
    locales,
    localizedRoutes,
    type Locale,
} from "@/i18n/routes";

const baseUrl = "https://usecountme.com";

export default function sitemap( ): MetadataRoute.Sitemap {
    return locales.flatMap((locale) => {
        const homePage = {
        url: `${baseUrl}/${locale}`,
        changeFrequency: "weekly" as const,
        priority: 1,
        };

        const internalPages = Object.values(localizedRoutes).map((route) => ({
        url: `${baseUrl}/${locale}/${route[locale as Locale]}`,
        changeFrequency: "yearly" as const,
        priority: 0.5,
        }));

        return [homePage, ...internalPages];
    });
}
