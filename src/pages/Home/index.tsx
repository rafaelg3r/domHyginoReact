import { SectionMain } from "../../Sections/SectionMain";
import { SectionSobre } from "../../Sections/SectionSobre";
import { SectionCortes } from "../../Sections/SectionCortes";
import { SectionLojas } from "../../Sections/SectionLojas";
import { SectionFranqueado } from "../../Sections/SectionFranqueado";
import { motion } from "framer-motion";

export function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionMain />
        <SectionSobre />
        <SectionCortes />
        <SectionLojas />
        <SectionFranqueado />
      </motion.div>
    </>
  );
}
