import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import LinksInternos from "@/components/navegation/links_internos";
import { getLocalizedPath, type Locale } from "@/i18n/routes";
import styles from "@/components/pages/css/pages.module.css";
import LanguageSwitcher from "../navegation/LanguageSwitcher";

export default function Sobre() {
    const t = useTranslations("Sobre");
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
                    <p className={styles.intro}>{t("intro")}</p>

                    <hr className={styles.divider} />

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>{t("proposalTitle")}</h2>
                        <p className={styles.paragraph}>{t("proposalText1")}</p>
                        <p className={styles.paragraph}>{t("proposalText2")}</p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>{t("featuresTitle")}</h2>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <strong>{t("features.metricsTitle")}</strong> {t("features.metricsText")}
                            </li>
                            <li className={styles.listItem}>
                                <strong>{t("features.formattingTitle")}</strong> {t("features.formattingText")}
                            </li>
                            <li className={styles.listItem}>
                                <strong>{t("features.actionsTitle")}</strong> {t("features.actionsText")}
                            </li>
                            <li className={styles.listItem}>
                                <strong>{t("features.persistenceTitle")}</strong> {t("features.persistenceText")}
                            </li>
                        </ul>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>{t("devTitle")}</h2>
                        <p className={styles.paragraph}>{t("devText")}</p>
                    </section>

                    <hr className={styles.divider} />

                    <div className={styles.thanks}>
                        <p className={styles.thanksText}>{t("thanks")}</p>
                    </div>
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