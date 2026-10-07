"use client";
import styles from "@/components/navegation/css/linksInternos.module.css";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

import {
    getLocalizedPath,
    type NavegationKey,
    type Locale,
} from "@/i18n/routes";

import {
    Info,        // about
    Shield,      // privacy
    PenLine,     // write
    type LucideIcon,
} from "lucide-react";

const iconsByRoute: Record<NavegationKey, LucideIcon> = {
    home: PenLine,
    about: Info,
    privacy: Shield,
}

export default function LinksInternos({routeKey}: {routeKey: NavegationKey}){

    const locale = useLocale() as Locale;
    const t = useTranslations("Navigation");

    const Icon = iconsByRoute[routeKey];

    return (
        <div className={styles.links}>
            <Link href={getLocalizedPath(routeKey, locale)}>
                <Icon size={20}/> {t(routeKey)}
            </Link>
        </div>
    );
}