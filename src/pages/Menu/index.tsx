import styles from "./styles.module.css";

import { SectionBanner } from "../../Sections/SectionBanner";
import { LineFilter } from "../../components/LineFilter";
import { MenuCards } from "../../components/MenuCards";
import { Display } from "../../components/Display";

export function Menu() {
  return (
    <>
      <SectionBanner />
      <div className={styles.menuMainContent}>
        <LineFilter />
        <MenuCards />
        <Display />
      </div>
    </>
  );
}
