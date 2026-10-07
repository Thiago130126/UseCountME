import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import LinksInternos from "@/components/navegation/links_internos";
import { getLocalizedPath, type Locale } from "@/i18n/routes";
import styles from "@/components/pages/css/pages.module.css";
import LanguageSwitcher from "../navegation/LanguageSwitcher";

export default function PoliticaPrivacidade() {
    const t = useTranslations("PoliticaPrivacidade");
    const tNav = useTranslations("Navigation");
    const locale = useLocale() as Locale;

    return (
        <div className={styles.pageContainer}>
            {/* Barra Lateral (Sidebar) com links e logo */}
            <aside className={styles.sidebar}>
                <nav className={styles.links_and_titles}>
                    <Link href={"/"}>
                        <img src="/use-count-me-logo-transparent.png" alt="logo"/>
                    </Link>
                    <div className={styles.nav_links}>
                        <LinksInternos routeKey="home"/>

                        <LinksInternos routeKey="about"/>

                        <LinksInternos routeKey="privacy"/>
                    </div>
                </nav>
            </aside>

            {/* Conteúdo Principal */}
            <main className={styles.mainContent}>
                {/* Botão de retorno direto à ferramenta principal */}
                <div className={styles.links_translate}>
                    <Link href={getLocalizedPath("home", locale)} className={styles.backButton}>
                        <ArrowLeft size={18} />
                        <span>{tNav("home")}</span>
                    </Link>

                    <LanguageSwitcher/>
                </div>

                <article className={styles.article}>
                    <h1 className={styles.title}>{t("title")}</h1>
                    
                    <div className={styles.badge}>
                        <Clock size={15} />
                        <span><strong>{t("lastUpdatedLabel")}:</strong> {t("lastUpdatedDate")}</span>
                    </div>

                    <p className={styles.intro}>{t("intro")}</p>

                    <hr className={styles.divider} />

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>{t("section1.title")}</h2>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <strong>{t("section1.noCollectTitle")}</strong> {t("section1.noCollectText")}
                            </li>
                            <li className={styles.listItem}>
                                <strong>{t("section1.storageTitle")}</strong> {t("section1.storageText")}
                            </li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>{t("section2.title")}</h2>
                        <p className={styles.paragraph}>{t("section2.intro")}</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <strong>{t("section2.cookiesTitle")}</strong> {t("section2.cookiesText")}
                            </li>
                            <li className={styles.listItem}>
                                <strong>{t("section2.adsTitle")}</strong> {t("section2.adsText")}
                            </li>
                            <li className={styles.listItem}>
                                <strong>{t("section2.optOutTitle")}</strong> {t("section2.optOutText1")}{" "}
                                <a
                                    href="https://www.google.com/settings/ads"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.link}
                                >
                                    {t("section2.googleAdsLink")}
                                </a>
                                {t("section2.optOutText2")}{" "}
                                <a
                                    href="https://www.aboutads.info"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.link}
                                >
                                    www.aboutads.info
                                </a>{" "}
                                {t("section2.optOutText3")}
                            </li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>{t("section3.title")}</h2>
                        <p className={styles.paragraph}>{t("section3.text")}</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>{t("section4.title")}</h2>
                        <p className={styles.paragraph}>{t("section4.text")}</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>{t("section5.title")}</h2>
                        <p className={styles.paragraph}>
                            {t("section5.text")} <strong>{t("section5.email")}</strong>.
                        </p>
                    </section>
                </article>

                {/* Rodapé compartilhado */}
                <footer className={styles.footer}>
                    <div className={styles.footerLinks}>
                        <LinksInternos routeKey="home" />
                        <LinksInternos routeKey="about" />
                        <LinksInternos routeKey="privacy" />
                    </div>
                    <p className={styles.version}>{process.env.NEXT_PUBLIC_VERSION || "v1.0"}</p>
                </footer>
            </main>
        </div>
    );
}