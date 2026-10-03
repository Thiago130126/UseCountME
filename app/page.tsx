'use client';
import ComoUsar from "@/components/content/ComoUsar";
import Etimologia from "@/components/content/Etimologia";
import FAQ from "@/components/content/FAQ";
import PorqueUsar from "@/components/content/PorqueUsar";
import VisaoAutor from "@/components/content/VisaoAutor";
import TextInput from "@/components/inputs/TextInput";

export default function Home() {
  return (
    <div>
      <h1>
        Contador de Palavras
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
    </div>
  );
}
