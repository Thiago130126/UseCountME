"use client";
import styles from "@/components/navegation/css/linksInternos.module.css";
import { usePathname } from "next/navigation";

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

    const pathname = usePathname();
    const targetPath = getLocalizedPath(routeKey, locale);
    const isActive = pathname === targetPath;

    return (
        <div className={styles.links}>
            <Link href={getLocalizedPath(routeKey, locale)} className={`${isActive ? styles.active : ""}`}>
                <Icon size={20}/> <span>{t(routeKey)}</span>
            </Link>
        </div>
    );
}