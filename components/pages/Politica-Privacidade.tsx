import { useTranslations } from "next-intl";
import styles from "@/components/pages/css/pages.module.css";

export default function PoliticaPrivacidade() {
    const t = useTranslations("PoliticaPrivacidade");

    return (
        <article>
            <h1>{t("title")}</h1>
            <p>
                <strong>{t("lastUpdatedLabel")}:</strong> {t("lastUpdatedDate")}
            </p>

            <p>{t("intro")}</p>

            <hr />

            <section>
                <h2>{t("section1.title")}</h2>
                <ul>
                <li>
                    <strong>{t("section1.noCollectTitle")}</strong> {t("section1.noCollectText")}
                </li>
                <li>
                    <strong>{t("section1.storageTitle")}</strong> {t("section1.storageText")}
                </li>
                </ul>
            </section>

            <section>
                <h2>{t("section2.title")}</h2>
                <p>{t("section2.intro")}</p>
                <ul>
                <li>
                    <strong>{t("section2.cookiesTitle")}</strong> {t("section2.cookiesText")}
                </li>
                <li>
                    <strong>{t("section2.adsTitle")}</strong> {t("section2.adsText")}
                </li>
                <li>
                    <strong>{t("section2.optOutTitle")}</strong> {t("section2.optOutText1")}{" "}
                    <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
                    {t("section2.googleAdsLink")}
                    </a>
                    {t("section2.optOutText2")}{" "}
                    <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">
                    www.aboutads.info
                    </a>{" "}
                    {t("section2.optOutText3")}
                </li>
                </ul>
            </section>

            <section>
                <h2>{t("section3.title")}</h2>
                <p>{t("section3.text")}</p>
            </section>

            <section>
                <h2>{t("section4.title")}</h2>
                <p>{t("section4.text")}</p>
            </section>

            <section>
                <h2>{t("section5.title")}</h2>
                <p>
                {t("section5.text")} <strong>{t("section5.email")}</strong>.
                </p>
            </section>
        </article>
    );
}