import { useTranslations } from "next-intl";
import styles from "@/components/content/css/content.module.css";

export default function PorqueUsar() {
    const t = useTranslations("Content.PqUsar");

    return (
        <article className={styles.article}>
            <h2 className={styles.title}>{t("title")}</h2>

            <section>
                <p className={styles.paragraph}>{t("intro")}</p>

                <h3 className={styles.subtitle}>{t("applicationsTitle")}</h3>

                <ul className={styles.list}>
                <li className={styles.listItem}>
                    <strong>{t("applications.socialTitle")}</strong> {t("applications.socialText")}
                </li>
                <li className={styles.listItem}>
                    <strong>{t("applications.academicTitle")}</strong> {t("applications.academicText")}
                </li>
                <li className={styles.listItem}>
                    <strong>{t("applications.seoTitle")}</strong> {t("applications.seoText")}
                </li>
                <li className={styles.listItem}>
                    <strong>{t("applications.formsTitle")}</strong> {t("applications.formsText")}
                </li>
                </ul>

                <p className={styles.paragraph}>{t("privacy")}</p>
            </section>
        </article>
    );
}