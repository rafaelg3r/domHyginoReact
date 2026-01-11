import { motion } from "framer-motion";
import styles from "./styles.module.css";

import { GradientText } from "../../components/GradientText";

import LogoDomHygino from "../../assets/logos/logoSlim.png";
export function SectionSobre() {
  return (
    <>
      <section id="about" className={styles.about}>
        <div className={styles.title}>
          <GradientText as="h2" variant="mid">
            Conheça a Dom
          </GradientText>
          <span>Seu churrasco começa aqui.</span>
        </div>
        <div className={styles.contentContainer}>
          <motion.img
            className={styles.logo}
            src={LogoDomHygino}
            alt="Logo da loja de carnes Dom Hygino"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.9 }}
          />
          <div className={styles.aboutText}>
            <p>
              A Dom Hygino nasceu em Santa Rosa no Rio Grande do Sul com um
              propósito claro de oferecer aos apaixonados por carne uma
              experiência única e de alta qualidade!
            </p>
            <p>
              Desde o início, a Dom se destacou por combinar tradição e cuidado
              na escolha de carnes nobres, nacionais e importadas, criando um
              espaço pensado para quem valoriza sabor, qualidade e experiência.
              Nosso ambiente também é preparado para eventos exclusivos,
              proporcionando momentos memoráveis aos nossos clientes.
            </p>
            <p>
              A Dom Hygino é mais do que uma loja de carnes, é um espaço onde
              paixão, qualidade e dedicação se encontram para transformar cada
              corte em uma experiência única.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
