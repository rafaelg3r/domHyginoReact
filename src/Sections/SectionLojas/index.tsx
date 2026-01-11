import { GradientText } from "../../components/GradientText";
import styles from "./styles.module.css";

import mapImg from "../../assets/home/lojas/lojas-mapa.png";
import instagramIcon from "../../assets/icons/instagram.svg";
import outArrow from "../../assets/icons/outArrow.svg";

export function SectionLojas() {
  return (
    <>
      <section id="lojas" className={styles.lojas}>
        <div className={styles.lojasTitleContainer}>
          <GradientText as="h2" variant="mid" className={styles.lojasTitle}>
            Nossas Lojas
          </GradientText>
        </div>
        <div className={styles.lojasContentContainer}>
          <div className={styles.lojasMap}>
            <img src={mapImg} className={styles.mapaLojasCidades} alt="" />
          </div>
          <div className={styles.lojasSocials}>
            <GradientText as="h3" variant="mid">
              ACOMPANHE AS OFERTAS DA SEMANA
            </GradientText>
            <div className={styles.lojasLista}>
              <a target="_blank" href="https://www.instagram.com/domhygino">
                <div className={styles.domItemLista}>
                  <div className={styles.itemListaContent}>
                    <img src={instagramIcon} alt="logo do instagram" />
                    <span>Dom Hygino Santa Rosa</span>
                  </div>
                  <img src={outArrow} alt="abrir em uma nova guia" />
                </div>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/domhyginocaxiasdosul"
              >
                <div
                  className={`${styles.domItemLista} ${styles.domCaxiasDoSul} `}
                >
                  <div className={styles.itemListaContent}>
                    <img src={instagramIcon} alt="" />
                    <span>Dom Hygino Caxias do Sul</span>
                  </div>
                  <img src={outArrow} alt="abrir em uma nova guia" />
                </div>
              </a>
              <a target="_blank" href="http://instagram.com/dom_hygino_capao">
                <div className={styles.domItemLista}>
                  <div className={styles.itemListaContent}>
                    <img src={instagramIcon} alt="" />
                    <span>Dom Hygino Capão Da Canoa</span>
                  </div>
                  <img src={outArrow} alt="abrir em uma nova guia" />
                </div>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/domhygino_horizontina/"
              >
                <div className={styles.domItemLista}>
                  <div className={styles.itemListaContent}>
                    <img src={instagramIcon} alt="" />
                    <span> Dom Hygino Horizontina </span>
                  </div>
                  <img src={outArrow} alt="abrir em uma nova guia" />
                </div>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/domhyginoijui/"
              >
                <div className={`${styles.domItemLista} ${styles.dom5}`}>
                  <div className={styles.itemListaContent}>
                    <img src={instagramIcon} alt="" />
                    <span>Dom Hygino Ijuí</span>
                  </div>
                  <img src={outArrow} alt="abrir em uma nova guia" />
                </div>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/dom_hygino_jaragua/"
              >
                <div className={`${styles.domItemLista} ${styles.dom6}`}>
                  <div className={styles.itemListaContent}>
                    <img src={instagramIcon} alt="" />
                    <span>Dom Hygino Jaraguá do Sul</span>
                  </div>
                  <img src={outArrow} alt="abrir em uma nova guia" />
                </div>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/domhygino_poa/"
              >
                <div className={`${styles.domItemLista} ${styles.dom7}`}>
                  <div className={styles.itemListaContent}>
                    <img src={instagramIcon} alt="" />
                    <span>Dom Hygino Porto Alegre</span>
                  </div>
                  <img src={outArrow} alt="abrir em uma nova guia" />
                </div>
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/domhyginotorres/"
              >
                <div className={`${styles.domItemLista} ${styles.dom8}`}>
                  <div className={styles.itemListaContent}>
                    <img src={instagramIcon} alt="" />
                    <span>Dom Hygino Torres</span>
                  </div>
                  <img src={outArrow} alt="abrir em uma nova guia" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
