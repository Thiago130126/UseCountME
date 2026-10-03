'use client';
import ComoUsar from "@/components/content/ComoUsar";
import Etimologia from "@/components/content/Etimologia";
import FAQ from "@/components/content/FAQ";
import PorqueUsar from "@/components/content/PorqueUsar";
import VisaoAutor from "@/components/content/VisaoAutor";
import TextInput from "@/components/inputs/TextInput";
import { useTranslations } from "next-intl";

export default function Home() {

  const t = useTranslations('Home');

  return (
    <div>
      <main>
        <h1>
          {t('title')}
        </h1>

        <div>
          <TextInput/>
        </div>

        <div>
          <div>
            <Etimologia/>
          </div>

          <div>
            <ComoUsar/>
          </div>

          <div>
            <PorqueUsar/>
          </div>

          <div>
            <VisaoAutor/>
          </div>

          <div>
            <FAQ/>
          </div>
        </div>
      </main>
    </div>
  );
}
