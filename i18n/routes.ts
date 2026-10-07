export const locales = ["pt", "en", "es"] as const;

export type Locale = (typeof locales)[number];

export const localizedRoutes = {
    about: {
        pt: "sobre",
        en: "about",
        es: "sobre",
    },
    privacy: {
        pt: "politica-de-privacidade",
        en: "privacy-policy",
        es: "politica-de-privacidad",
    },
} as const;

export type RouteKey = keyof typeof localizedRoutes;
export type NavegationKey = RouteKey | "home";

export function getRouteKey(
    locale: string,
    slug: string
): RouteKey | undefined {
    for (const [routeKey, slugs] of Object.entries(localizedRoutes)) {
        if(slugs[locale as Locale] === slug){
            return routeKey as RouteKey;
        }
    }

    return undefined;
}

export function getLocalizedPath(
    routeKey: NavegationKey,
    locale: Locale
) {
    if (routeKey === "home"){
        return `/${locale}`;
    }
    return `/${locale}/${localizedRoutes[routeKey][locale]}`;
}