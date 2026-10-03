import { useTranslations } from "next-intl";

export default function FAQ() {
    const t = useTranslations("Content.FAQ");

    return (
        <article>
            <h2>{t("title")}</h2>

            <section>
                <div>
                <h3>{t("q1Title")}</h3>
                <p>
                    <strong>{t("q1Bold")}</strong> {t("q1Text")}
                </p>
                </div>

                <div>
                <h3>{t("q2Title")}</h3>
                <p>
                    <strong>{t("q2Bold")}</strong> {t("q2Text")}
                </p>
                </div>

                <div>
                <h3>{t("q3Title")}</h3>
                <p>{t("q3Text")}</p>
                </div>

                <div>
                <h3>{t("q4Title")}</h3>
                <p>
                    <strong>{t("q4Bold")}</strong> {t("q4Text")}
                </p>
                </div>
            </section>
        </article>
    );
}