import PoliticaPrivacidade from "@/components/pages/Politica-Privacidade";
import Sobre from "@/components/pages/Sobre";
import { getRouteKey } from "@/i18n/routes";
import { notFound } from "next/navigation";

type PageProps = {
    params: Promise<{
        locale: string;
        slug: string;
    }>;
};

export default async function LocalizedPage({params}: PageProps){
    const { locale, slug } = await params;
    const routeKey = getRouteKey(locale, slug);

    if(!routeKey) {
        notFound();
    }

    switch (routeKey){
        case "about":
            return <Sobre/>;
        case "privacy":
            return <PoliticaPrivacidade/>;
        
        default:
            notFound();
    }
}