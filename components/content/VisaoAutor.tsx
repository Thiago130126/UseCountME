import { useTranslations } from "next-intl";

export default function VisaoAutor() {
    const t = useTranslations("Content.VisaoAutor");

    return (
        <article>
            <h2>{t("title")}</h2>

            <section>
                <p>{t("intro")}</p>

                <h3>{t("listTitle")}</h3>
                <ul>
                <li>
                    <strong>{t("items.logicTitle")}</strong> {t("items.logicText")}
                </li>
                <li>
                    <strong>{t("items.archTitle")}</strong> {t("items.archText")}
                </li>
                <li>
                    <strong>{t("items.uxTitle")}</strong> {t("items.uxText")}
                </li>
                <li>
                    <strong>{t("items.seoTitle")}</strong> {t("items.seoText")}
                </li>
                <li>
                    <strong>{t("items.lifecycleTitle")}</strong> {t("items.lifecycleText")}
                </li>
                </ul>

                <p>{t("conclusion")}</p>
            </section>
        </article>
    );
}