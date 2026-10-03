import { useTranslations } from "next-intl";

export default function ComoUsar() {
    const t = useTranslations("Content.ComoUsar");

    return (
        <article>
            <h2>{t("title")}</h2>

            <section>
                <p>{t("intro")}</p>

                <ol>
                <li>
                    <strong>{t("steps.step1Title")}</strong> {t("steps.step1Text")}
                </li>
                <li>
                    <strong>{t("steps.step2Title")}</strong> {t("steps.step2Text")}
                </li>
                <li>
                    <strong>{t("steps.step3Title")}</strong>
                    <ul>
                    <li>
                        <strong>{t("steps.actions.copyTitle")}</strong> {t("steps.actions.copyText")}
                    </li>
                    <li>
                        <strong>{t("steps.actions.clearTitle")}</strong> {t("steps.actions.clearText")}
                    </li>
                    <li>
                        <strong>{t("steps.actions.formatTitle")}</strong> {t("steps.actions.formatText")}
                    </li>
                    </ul>
                </li>
                </ol>

                <p>{t("conclusion")}</p>
            </section>
        </article>
    );
}