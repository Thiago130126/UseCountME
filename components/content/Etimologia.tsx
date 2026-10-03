import { useTranslations } from "next-intl";

export default function Etimologia() {
    const t = useTranslations("Content.Etimologia");

    return (
        <article>
            <h2>{t("title")}</h2>

            <section>
                <p>{t("intro")}</p>

                <div>
                <h3>{t("palavraTitle")}</h3>
                <p>
                    A palavra portuguesa <strong>{t("palavraBold")}</strong> {t("palavraText")}
                </p>
                </div>

                <div>
                <h3>{t("textoTitle")}</h3>
                <p>
                    A origem de <strong>{t("textoBold")}</strong> {t("textoText")}
                </p>
                </div>

                <div>
                <h3>{t("caractereTitle")}</h3>
                <p>
                    O termo <strong>{t("caractereBold")}</strong> {t("caractereText")}
                </p>
                </div>
            </section>
        </article>
    );
}