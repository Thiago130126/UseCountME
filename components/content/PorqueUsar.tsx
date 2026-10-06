import { useTranslations } from "next-intl";
import styles from "@/components/content/css/content.module.css";

export default function PorqueUsar() {
    const t = useTranslations("Content.PqUsar");

    return (
        <article>
            <h2>{t("title")}</h2>

            <section>
                <p>{t("intro")}</p>

                <h3>{t("applicationsTitle")}</h3>

                <ul>
                <li>
                    <strong>{t("applications.socialTitle")}</strong> {t("applications.socialText")}
                </li>
                <li>
                    <strong>{t("applications.academicTitle")}</strong> {t("applications.academicText")}
                </li>
                <li>
                    <strong>{t("applications.seoTitle")}</strong> {t("applications.seoText")}
                </li>
                <li>
                    <strong>{t("applications.formsTitle")}</strong> {t("applications.formsText")}
                </li>
                </ul>

                <p>{t("privacy")}</p>
            </section>
        </article>
    );
}