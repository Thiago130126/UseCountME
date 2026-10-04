import PoliticaPrivacidade from "@/components/pages/Politica-Privacidade";
import Sobre from "@/components/pages/Sobre";
import {
    getRouteKey,
    localizedRoutes,
    locales,
} from "@/i18n/routes";
import { notFound } from "next/navigation";

type PageProps = {
    params: Promise<{
        locale: string;
        slug: string;
    }>;
};

export function generateStaticParams( ) {
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
