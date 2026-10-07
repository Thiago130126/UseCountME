import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
    getRouteKey,
    localizedRoutes,
    locales,
    type Locale,
} from "@/i18n/routes";
import { notFound } from "next/navigation";
import PoliticaPrivacidade from "@/components/pages/Politica-Privacidade";
import Sobre from "@/components/pages/Sobre";

type PageProps = {
    params: Promise<{
        locale: string;
        slug: string;
    }>;
};

export const dynamicParams = false;


function getRouteUrls(
    routeKey: keyof typeof localizedRoutes
    ) {
    const baseUrl = "https://usecountme.com";
    const route = localizedRoutes[routeKey];

    return {
        "pt-BR": `${baseUrl}/pt/${route.pt}`,
        en: `${baseUrl}/en/${route.en}`,
        es: `${baseUrl}/es/${route.es}`,
        "x-default": `${baseUrl}/en/${route.en}`,
    };
}

export async function generateMetadata({
    params,
    }: PageProps ): Promise<Metadata> {
    const { locale, slug } = await params;

    const routeKey = getRouteKey(locale, slug);

    if (!routeKey) {
        notFound();
    }

    const namespace =
        routeKey === "about" ? "Sobre" : "PoliticaPrivacidade";

    const t = await getTranslations({
        locale,
        namespace,
    });

    const baseUrl = "https://usecountme.com";
    const typedLocale = locale as Locale;
    const localizedSlug = localizedRoutes[routeKey][typedLocale];
    const canonical = `${baseUrl}/${locale}/${localizedSlug}`;

    const title = t("seoTitle" );
    const description = t("seoDescription");

    const ogLocale =
        locale === "pt"
        ? "pt_BR"
        : locale === "es"
            ? "es_ES"
            : "en_US";

    return {
        title,
        description,

        alternates: {
        canonical,
        languages: getRouteUrls(routeKey),
        },

        openGraph: {
        title,
        description,
        url: canonical,
        siteName: "Use Count Me",
        type: "website",
        locale: ogLocale,
        images: [
            {
                url: "https://usecountme.com/og-image.png",
                width: 1200,
                height: 630,
                alt: title,
            }
        ]
        },

        twitter: {
        card: "summary",
        title,
        description,
        images: ["https://usecountme.com/og-image.png"],
        },

        robots: {
        index: true,
        follow: true,
        },
    };
}

export function generateStaticParams() {
    return locales.flatMap((locale) =>
        Object.values(localizedRoutes).map((route) => ({
        locale,
        slug: route[locale],
        }))
    );
}

export default async function LocalizedPage({ params }: PageProps) {
    const { locale, slug } = await params;
    const routeKey = getRouteKey(locale, slug);

    if (!routeKey) {
        notFound();
    }

    switch (routeKey) {
        case "about":
        return <Sobre />;

        case "privacy":
        return <PoliticaPrivacidade />;

        default:
        notFound();
    }
}
