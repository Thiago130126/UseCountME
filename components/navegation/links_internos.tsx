"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

import {
    getLocalizedPath,
    type RouteKey,
    type Locale,
} from "@/i18n/routes";


export default function LinksInternos({routeKey}: {routeKey: RouteKey}){

    const locale = useLocale() as Locale;
    const t = useTranslations("Navigation");

    return (
        <div>
            <Link href={getLocalizedPath(routeKey, locale)}>
                {t(routeKey)}
            </Link>
        </div>
    );
}