import { SectionMain } from "../../components/SectionMain";
import { SectionSobre } from "../../components/SectionSobre";
import { SectionCortes } from "../../components/SectionCortes";
import { SectionLojas } from "../../components/SectionLojas";
import { SectionFranqueado } from "../../components/SectionFranqueado";

export function Home() {
  return (
    <>
      <SectionMain />
      <SectionSobre />
      <SectionCortes />
      <SectionLojas />
      <SectionFranqueado />
    </>
  );
}
