import styles from "./styles.module.css";

import { motion } from "framer-motion";
import { SectionBanner } from "../../Sections/SectionBanner";
import { LineFilter } from "../../components/LineFilter";
import { MenuCards } from "../../components/MenuCards";
import { Display } from "../../components/Display";

export function Menu() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.menuContainer}>
        <SectionBanner />
        <div className={styles.menuMainContent}>
          <div className={styles.menuFilterCardsContainer}>
            <div className={styles.filterCards}>
              <LineFilter />
              <MenuCards />
            </div>
          </div>
          <div className={styles.menuDisplay}>
            <Display />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
