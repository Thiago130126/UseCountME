'use client';
import ComoUsar from "@/components/content/ComoUsar";
import Etimologia from "@/components/content/Etimologia";
import FAQ from "@/components/content/FAQ";
import PorqueUsar from "@/components/content/PorqueUsar";
import VisaoAutor from "@/components/content/VisaoAutor";
import TextInput from "@/components/inputs/TextInput";
import LinksInternos from "@/components/navegation/links_internos";
import { useTranslations } from "next-intl";

export default function Home() {

  const t = useTranslations('Home');

  return (
    /* 1. conteúdo da página principal */
    <div>
      {/* 2. Dentro de main estão todas as caixas do layout */}
      <main>
        {/* 3. BARRA LATERAL (Sidebar / Navbar) */}
        <div>
          <nav>
            <h1>Use Count Me</h1>

            <LinksInternos routeKey="about"/>

            <LinksInternos routeKey="privacy"/>

          </nav>
        </div>

        {/* 4. Conteúdo principal do site */}
        <div>
          <h1>
            {t('title')}
          </h1>

          {/* 5. Área de texto */}
          <div>
            <TextInput/>
          </div>

          {/* 6. Textos da página */}
          <div>
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

          </div>
          {/* 11. Rodapé */}
          <footer>
            <LinksInternos routeKey="about"/>

            <LinksInternos routeKey="privacy"/>

            <p>{process.env.NEXT_PUBLIC_VERSION}</p>
          </footer>
        </div>

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
