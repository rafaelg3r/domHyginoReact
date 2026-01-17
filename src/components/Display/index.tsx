import styles from "./styles.module.css";
import { GradientText } from "../GradientText";
import { useCurrentSteak } from "../../utils/currentLine";
import { products } from "../../utils/products";
import { motion } from "framer-motion";

// TODO: tirar o draggable dos cards, mudar o display sem nada selecionado pra ficar mais bonito,
//  animações nos acompanhamentos em cascata de cima pra baixo,
export function Display() {
  const currentSteakName = useCurrentSteak();

  const currentProduct = products.find(
    (p) => p.name.toLowerCase() === currentSteakName?.toLowerCase()
  );

  if (!currentProduct) {
    return (
      <div className={`${styles.menuDisplay} ${styles.displayNoContent}`}>
        <div className={styles.displaySteakContent}>
          <p>Selecione uma carne</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className={styles.menuDisplay}>
        <div className={styles.displaySteakContent}>
          <GradientText
            as="strong"
            variant="mid"
            className={styles.displayTitle}
          >
            {currentProduct.name}
          </GradientText>
          <motion.img
            key={`title-${currentProduct.name}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            src={currentProduct.image}
            alt={currentProduct.name}
          />
          <GradientText
            as="p"
            variant="mid"
            className={styles.displayDescription}
          >
            <motion.div
              key={`title-${currentProduct.name}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {currentProduct.description}
            </motion.div>
          </GradientText>
        </div>
        <div className={styles.displayInfoContainer}>
          <div className={styles.displaySidesContainer}>
            <GradientText
              as="strong"
              variant="right"
              className={styles.sidesTitle}
            >
              acompanhamentos
            </GradientText>
            {currentProduct.sides.map((side, index) => (
              <div key={index} className={styles.displaySides}>
                <div className={styles.iconContainer}>
                  <img src={side.icon} alt={side.name} />
                </div>
                <p>{side.name}</p>
              </div>
            ))}
          </div>
          <div className={styles.displayPairingsContainer}>
            <GradientText
              as="strong"
              variant="right"
              className={styles.sidesTitle}
            >
              harmonizações
            </GradientText>
            {currentProduct.pairings.map((pairing, index) => (
              <div key={index} className={styles.displayPairings}>
                <div className={styles.iconContainer}>
                  <img
                    src={pairing.icon}
                    alt={pairing.name}
                    className={styles.sidesIcons}
                  />
                </div>
                <p>{pairing.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
