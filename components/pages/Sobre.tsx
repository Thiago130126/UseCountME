import { useTranslations } from "next-intl";

export default function Sobre() {
    const t = useTranslations("Sobre");

    return (
        <article>
            <h1>{t("title")}</h1>
            <p>{t("intro")}</p>

            <hr />

            <section>
                <h2>{t("proposalTitle")}</h2>
                <p>{t("proposalText1")}</p>
                <p>{t("proposalText2")}</p>
            </section>

            <section>
                <h2>{t("featuresTitle")}</h2>
                <ul>
                <li>
                    <strong>{t("features.metricsTitle")}</strong> {t("features.metricsText")}
                </li>
                <li>
                    <strong>{t("features.formattingTitle")}</strong> {t("features.formattingText")}
                </li>
                <li>
                    <strong>{t("features.actionsTitle")}</strong> {t("features.actionsText")}
                </li>
                <li>
                    <strong>{t("features.persistenceTitle")}</strong> {t("features.persistenceText")}
                </li>
                </ul>
            </section>

            <section>
                <h2>{t("devTitle")}</h2>
                <p>{t("devText")}</p>
            </section>

            <hr />

            <p>
                <em>{t("thanks")}</em>
            </p>
        </article>
    );
}