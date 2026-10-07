import { useTranslations } from "next-intl";
import styles from "@/components/content/css/content.module.css";

export default function Etimologia() {
    const t = useTranslations("Content.Etimologia");

    return (
        <article className={styles.article}>
            <h2 className={styles.title}>{t("title")}</h2>

            <section>
                <p className={styles.paragraph}>{t("intro")}</p>

                <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>{t("palavraTitle")}</h3>
                <p className={styles.paragraph}>
                    A palavra portuguesa <strong>{t("palavraBold")}</strong> {t("palavraText")}
                </p>
                </div>

                <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>{t("textoTitle")}</h3>
                <p className={styles.paragraph}>
                    A origem de <strong>{t("textoBold")}</strong> {t("textoText")}
                </p>
                </div>

                <div className={styles.infoCard}>
                <h3 className={styles.infoCardTitle}>{t("caractereTitle")}</h3>
                <p className={styles.paragraph}>
                    O termo <strong>{t("caractereBold")}</strong> {t("caractereText")}
                </p>
                </div>
            </section>
        </article>
    );
}