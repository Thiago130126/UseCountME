import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import LinksInternos from "@/components/navegation/links_internos";
import { getLocalizedPath, type Locale } from "@/i18n/routes";
import styles from "@/components/pages/css/pages.module.css";
import LanguageSwitcher from "../navegation/LanguageSwitcher";



export default function BoringSites() {
    const t = useTranslations("BoringSites");
    const tNav = useTranslations("Navigation");
    const locale = useLocale() as Locale;
    const th = useTranslations("Sobre");

    return (
        <div className={styles.pageContainer}>
            <aside className={styles.sidebar}>
                <nav className={styles.links_and_titles}>
                    <Link href="/">
                        <img src="/use-count-me-logo-transparent.png" alt="logo" />
                    </Link>
                    <div className={styles.nav_links}>
                        <LinksInternos routeKey="home" />
                        <LinksInternos routeKey="about" />
                        <LinksInternos routeKey="privacy" />
                        <LinksInternos routeKey="boring"/>
                        <LinksInternos routeKey="contador"/>
                    </div>
                </nav>
            </aside>

            <main className={styles.mainContent}>
                <div className={styles.links_translate}>
                <Link href={getLocalizedPath("home", locale)} className={styles.backButton}>
                    <ArrowLeft size={18} />
                    <span>{tNav("home")}</span>
                </Link>

                <LanguageSwitcher />
                </div>

                <article className={styles.article}>
                    <h1 className={styles.title}>{t("title")}</h1>
                    <p className={styles.intro}>{t("subtitle")}</p>

                    <hr className={styles.divider} />

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>{t("introTitle")}</h2>
                        <p className={styles.paragraph}>{t("introText")}</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>{t("whatAreTitle")}</h2>
                        <p className={styles.paragraph}>{t("whatAreText")}</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>{t("monetizationTitle")}</h2>
                        <p className={styles.paragraph}>
                            {t.rich("monetizationText", {
                            strong: (chunks) => <strong>{chunks}</strong>,
                            })}
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>{t("adsOriginTitle")}</h2>
                        <p className={styles.paragraph}>{t("adsOriginText")}</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>{t("realityTitle")}</h2>
                        <p className={styles.paragraph}>{t("realityText")}</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>{t("whyBuiltTitle")}</h2>
                        <p className={styles.paragraph}>
                            {t.rich("whyBuiltText", {
                                strong: (chunks) => <strong>{chunks}</strong>,
                                pageLink: (chunks) => (
                                    <Link href={getLocalizedPath("boring", locale)} className={styles.link}>
                                        {chunks}
                                    </Link>
                                )
                            })}
                        </p>
                    </section>

                    <hr className={styles.divider} />

                    <div className={styles.thanks}>
                        <p className={styles.thanksText}>{th("thanks")}</p>
                    </div>
                </article>

                <footer className={styles.footer}>
                    <div className={styles.footerLinks}>
                        <LinksInternos routeKey="home" />
                        <LinksInternos routeKey="about" />
                        <LinksInternos routeKey="privacy" />
                    </div>
                    <p className={styles.version}>{process.env.NEXT_PUBLIC_VERSION}</p>
                </footer>
            </main>
        </div>
    );
}