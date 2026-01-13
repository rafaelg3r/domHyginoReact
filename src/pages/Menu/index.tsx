import styles from "./styles.module.css";

import { SectionBanner } from "../../Sections/SectionBanner";
import { LineFilter } from "../../components/LineFilter";
import { MenuCards } from "../../components/MenuCards";
import { Display } from "../../components/Display";

export function Menu() {
  return (
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
  );
}
