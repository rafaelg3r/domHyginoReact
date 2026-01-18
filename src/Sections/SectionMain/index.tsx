import styles from "./styles.module.css";

import { HashLink as Link } from "react-router-hash-link";

import HomeImg from "../../assets/home/home-bg.jpg";

import { Button } from "../../components/Button";
import { GradientText } from "../../components/GradientText";

export function SectionMain() {
  return (
    <div id="home">
      <main className={styles.hero}>
        <div
          className={`${styles.gradientBg} ${styles.gradientBottomTop}`}
        ></div>
        <div
          className={`${styles.gradientBg} ${styles.gradientLeftRight}`}
        ></div>

        <img
          draggable="false"
          className={styles.mainBg}
          src={HomeImg}
          alt="Background"
        />
        <div className={styles.heroTextContent}>
          <strong>Carnes e Especiarias</strong>
          <div className={styles.heroText}>
            <GradientText as="h1" variant="right" className={styles.heroTitle}>
              Dom Hygino
            </GradientText>
            <p>
              Da nossa seleção especial de carnes para o seu prato. Cortes
              nobres, frescos e com sabor incomparável para transformar suas
              refeições!
            </p>
            <div className={styles.heroBtns}>
              <Link to="/menu">
                <Button size="big" className={styles.flexBtn}>Ver Produtos</Button>
              </Link>
              <Link smooth to="/#lojas">
                <Button size="big" border className={styles.flexBtn}>
                  Nossas Lojas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
