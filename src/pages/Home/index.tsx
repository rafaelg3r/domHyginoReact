import { SectionMain } from "../../Sections/SectionMain";
import { SectionSobre } from "../../Sections/SectionSobre";
import { SectionCortes } from "../../Sections/SectionCortes";
import { SectionLojas } from "../../Sections/SectionLojas";
import { SectionFranqueado } from "../../Sections/SectionFranqueado";

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
