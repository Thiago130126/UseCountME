import { useTranslations } from "next-intl";
import styles from "@/components/content/css/content.module.css";

export default function VisaoAutor() {
    const t = useTranslations("Content.VisaoAutor");

    return (
        <article className={styles.article}>
            <h2 className={styles.title}>{t("title")}</h2>

            <section>
                <p className={styles.paragraph}>{t("intro")}</p>

                <h3 className={styles.subtitle}>{t("listTitle")}</h3>
                <ul className={styles.list}>
                <li className={styles.listItem}>
                    <strong>{t("items.logicTitle")}</strong> {t("items.logicText")}
                </li>
                <li className={styles.listItem}>
                    <strong>{t("items.archTitle")}</strong> {t("items.archText")}
                </li>
                <li className={styles.listItem}>
                    <strong>{t("items.uxTitle")}</strong> {t("items.uxText")}
                </li>
                <li className={styles.listItem}>
                    <strong>{t("items.seoTitle")}</strong> {t("items.seoText")}
                </li>
                <li className={styles.listItem}>
                    <strong>{t("items.lifecycleTitle")}</strong> {t("items.lifecycleText")}
                </li>
                </ul>

                <p className={styles.paragraph}>{t("conclusion")}</p>
            </section>
        </article>
    );
}