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
import BoringSites from "@/components/pages/Boring-Sites";
import ContadorPalavras from "@/components/pages/Contador-Palavras";

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
    const baseUrl = "https://www.usecountme.com";
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
}: PageProps): Promise<Metadata> {
    const { locale, slug } = await params;

    const routeKey = getRouteKey(locale, slug);

    if (!routeKey) {
        notFound();
    }

    const baseUrl = "https://www.usecountme.com";
    const typedLocale = locale as Locale;
    const localizedSlug = localizedRoutes[routeKey][typedLocale];
    const canonical = `${baseUrl}/${locale}/${localizedSlug}`;

    const ogLocale =
        locale === "pt"
            ? "pt_BR"
            : locale === "es"
                ? "es_ES"
                : "en_US";

    let title = "";
    let description = "";
    let keywords: string[] | undefined;

    if (routeKey === "boring") {
        const t = await getTranslations({
            locale,
            namespace: "BoringSitesMetadata",
        });

        title = t("title");
        description = t("description");
        keywords = t.raw("keywords") as string[];
    } else if (routeKey === "contador") {
        const t = await getTranslations({
            locale,
            namespace: "ContadorMetadata",
        });

        title = t("title");
        description = t("description");
        keywords = t.raw("keywords") as string[];
    } else {
        const namespace =
            routeKey === "about" ? "Sobre" : "PoliticaPrivacidade";

        const t = await getTranslations({
            locale,
            namespace,
        });

        title = t("seoTitle");
        description = t("seoDescription");
    }

    return {
        title,
        description,
        ...(keywords ? { keywords } : {}),

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
                    url: "https://www.usecountme.com/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },

        twitter: {
            card: "summary",
            title,
            description,
            images: ["https://www.usecountme.com/og-image.png"],
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

        case "boring":
        return <BoringSites/>;

        case "contador":
        return <ContadorPalavras/>;

        default:
        notFound();
    }
}
