"use client";

import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { Globe } from "lucide-react";
import {
    locales,
    getRouteKey,
    getLocalizedPath,
    type Locale,
    type NavegationKey,
} from "@/i18n/routes";
import styles from "./css/languageSwitcher.module.css";

const labels: Record<Locale, string> = {
    pt: "PT",
    en: "EN",
    es: "ES",
};

export default function LanguageSwitcher() {
    const currentLocale = useLocale() as Locale;
    const pathname = usePathname();

    // Extrai os pedaços da URL atual (ex: ["pt", "sobre"])
    const segments = pathname.split("/").filter(Boolean);
    const currentSlug = segments[1];

    // Descobre a rota atual ('home', 'about' ou 'privacy')
    let routeKey: NavegationKey = "home";
    if (currentSlug) {
        const detected = getRouteKey(currentLocale, currentSlug);
        if (detected) {
            routeKey = detected;
        }
    }

    const t = useTranslations("Navigation");

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Globe size={16} />
                <span>{t("idioma")}</span>
            </div>
            
            <div className={styles.switcher}>
                {locales.map((locale) => {
                    const targetPath = getLocalizedPath(routeKey, locale);
                    const isActive = locale === currentLocale;

                    return (
                        <Link
                            key={locale}
                            href={targetPath}
                            className={`${styles.langButton} ${isActive ? styles.active : ""}`}
                        >
                            {labels[locale]}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
