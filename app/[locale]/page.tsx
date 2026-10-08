'use client';
import ComoUsar from "@/components/content/ComoUsar";
import Etimologia from "@/components/content/Etimologia";
import FAQ from "@/components/content/FAQ";
import PorqueUsar from "@/components/content/PorqueUsar";
import VisaoAutor from "@/components/content/VisaoAutor";
import TextInput from "@/components/inputs/TextInput";
import LinksInternos from "@/components/navegation/links_internos";
import { useLocale, useTranslations } from "next-intl";

import styles from "@/app/[locale]/css/page.module.css";
import Link from "next/link";
import LanguageSwitcher from "@/components/navegation/LanguageSwitcher";
import { getLocalizedPath } from "@/i18n/routes";
import Image from "next/image";

import {
    type Locale,
} from "@/i18n/routes";

export default function Home() {

  const t = useTranslations('Home');

  const c = useTranslations("Copy");

  const locale = useLocale() as Locale;

  return (
    /* 1. conteúdo da página principal como um todo */
    <div className={styles.meu_site}>
      {/* 3. BARRA LATERAL (Sidebar / Navbar) */}
      <aside className={styles.sidebar}>
        <nav className={styles.links_and_titles}>
          <Link href={getLocalizedPath("home", locale)}>
            <Image src="/use-count-me-logo-transparent.png" alt="logo" width={521} height={226}/>
          </Link>
          <div className={styles.nav_links}>
            <LinksInternos routeKey="home"/>

            <LinksInternos routeKey="about"/>

            <LinksInternos routeKey="privacy"/>
          </div>
        </nav>

        <div className={styles.sidebar_footer}>
            <p className={styles.copyright}>
              {c("right")} &copy; 2026
            </p>
        </div>
      </aside>

      {/* 4. Conteúdo principal do site */}
      <main className={styles.main_content}>
        <header className={styles.header_site}>
          <h1 className={styles.titulo_degrade}>
            {t('title')}
          </h1>
          <LanguageSwitcher/>
        </header>

        {/* 5. Área de texto */}
        <section className={styles.textarea_container}>
          <TextInput/>
        </section>

        {/* 6. Textos da página */}
        <section className={styles.textos_container}>
          {/* 7. Etimologia */}
          <div>
            <Etimologia/>
          </div>

          {/* 8. ComoUsar */}
          <div>
            <ComoUsar/>
          </div>

          {/* 9. PorqueUsar */}
          <div>
            <PorqueUsar/>
          </div>  

          {/* 9. VisaoAutor */}
          <div>
            <VisaoAutor/>
          </div>

          {/* 10. FAQ */}
          <div>
            <FAQ/>
          </div>

        </section>
        {/* 11. Rodapé */}
        <footer className={styles.footer_site}>
          <div>
            <LinksInternos routeKey="about"/>

            <LinksInternos routeKey="privacy"/>
          </div>
          <p>{process.env.NEXT_PUBLIC_VERSION}</p>
        </footer>
      </main>


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Use Count Me",
            url: "https://usecountme.com",
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Web",
            description:
              "Free online word, character, and sentence counter.",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          } ),
        }}
      />
    </div>
  );
}
