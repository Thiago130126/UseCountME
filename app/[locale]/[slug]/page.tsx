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
        return {};
    }

    const t = await getTranslations({
        locale,
        namespace: routeKey === "about" ? "Sobre" : "PoliticaPrivacidade",
    });

    const baseUrl = "https://usecountme.com";
    const localizedSlug = localizedRoutes[routeKey][locale as Locale];
    const canonical = `${baseUrl}/${locale}/${localizedSlug}`;

    return {
        title: t("seoTitle" ),
        description: t("seoDescription"),

        alternates: {
        canonical,
        languages: getRouteUrls(routeKey),
        },

        openGraph: {
        title: t("seoTitle"),
        description: t("seoDescription"),
        url: canonical,
        siteName: "Use Count Me",
        type: "website",
        locale: locale === "pt" ? "pt_BR" : locale === "es" ? "es_ES" : "en_US",
        },

        twitter: {
        card: "summary",
        title: t("seoTitle"),
        description: t("seoDescription"),
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
