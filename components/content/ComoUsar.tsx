import { useTranslations } from "next-intl";
import styles from "@/components/content/css/content.module.css";

export default function ComoUsar() {
    const t = useTranslations("Content.ComoUsar");

    return (
        <article className={styles.article}>
            <h2 className={styles.title}>{t("title")}</h2>

            <section>
                <p className={styles.paragraph}>{t("intro")}</p>

                <ol className={styles.list}>
                <li className={styles.listItem}>
                    <strong>{t("steps.step1Title")}</strong> {t("steps.step1Text")}
                </li>
                <li className={styles.listItem}>
                    <strong>{t("steps.step2Title")}</strong> {t("steps.step2Text")}
                </li>
                <li className={styles.listItem}>
                    <strong>{t("steps.step3Title")}</strong>
                    <ul className={styles.subList}>
                    <li className={styles.listItem}>
                        <strong>{t("steps.actions.copyTitle")}</strong> {t("steps.actions.copyText")}
                    </li>
                    <li className={styles.listItem}>
                        <strong>{t("steps.actions.clearTitle")}</strong> {t("steps.actions.clearText")}
                    </li>
                    <li className={styles.listItem}>
                        <strong>{t("steps.actions.formatTitle")}</strong> {t("steps.actions.formatText")}
                    </li>
                    </ul>
                </li>
                </ol>

                <p className={styles.paragraph}>{t("conclusion")}</p>
            </section>
        </article>
    );
}