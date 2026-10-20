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
    LayoutGrid,  // boring
    BookOpen,    // contador
    type LucideIcon,
} from "lucide-react";

const iconsByRoute: Record<NavegationKey, LucideIcon> = {
    home: PenLine,
    about: Info,
    privacy: Shield,
    boring: LayoutGrid,
    contador: BookOpen
}

export default function LinksInternos({routeKey, showIcon = true}: {routeKey: NavegationKey; showIcon?:boolean}){

    const locale = useLocale() as Locale;
    const t = useTranslations("Navigation");

    const Icon = iconsByRoute[routeKey];

    const pathname = usePathname();
    const targetPath = getLocalizedPath(routeKey, locale);
    const isActive = pathname === targetPath;

    return (
        <div className={styles.links}>
            <Link href={getLocalizedPath(routeKey, locale)} className={`${isActive ? styles.active : ""}`}>
                {showIcon && <Icon size={20}/>} <span>{t(routeKey)}</span>
            </Link>
        </div>
    );
}