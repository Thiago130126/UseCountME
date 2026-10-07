import { useTranslations } from "next-intl";
import styles from "@/components/content/css/content.module.css";

export default function FAQ() {
    const t = useTranslations("Content.FAQ");

    return (
        <article className={styles.article}>
            <h2 className={styles.title}>{t("title")}</h2>

            <section>
                <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>{t("q1Title")}</h3>
                <p className={styles.paragraph}>
                    <strong>{t("q1Bold")}</strong> {t("q1Text")}
                </p>
                </div>

                <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>{t("q2Title")}</h3>
                <p className={styles.paragraph}>
                    <strong>{t("q2Bold")}</strong> {t("q2Text")}
                </p>
                </div>

                <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>{t("q3Title")}</h3>
                <p className={styles.paragraph}>{t("q3Text")}</p>
                </div>

                <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>{t("q4Title")}</h3>
                <p className={styles.paragraph}>
                    <strong>{t("q4Bold")}</strong> {t("q4Text")}
                </p>
                </div>
            </section>
        </article>
    );
}