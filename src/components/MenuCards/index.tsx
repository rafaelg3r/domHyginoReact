import styles from "./styles.module.css";

import { useCurrentLine } from "../../utils/currentLine";
import { Card } from "../../components/Card";
export function MenuCards() {
  // 5 5 2 1

  type ContentMapProps = {
    [key: string]: React.ReactNode;
  };

  const contentMap: ContentMapProps = {
    Boutique: (
      <div className={styles.gridCards}>
        <Card name="DENVER" shortDescription="Maciez e sabor suave" />
        <Card name="COWBOY" shortDescription="Suculento, macio e saboroso" />
        <Card name="SHOULDER" shortDescription="Maciez e sabor suave" />
        <Card
          name="STEAK SHOULDER"
          shortDescription="Suculento, macio e saboroso"
        />
        <Card name="HOUSE HIB" shortDescription="Suculento, macio e saboroso" />
      </div>
    ),
    "Novilho Jovem": (
      <div className={styles.gridCards}>
        <Card name="CONTRAFILÉ" shortDescription="" />
        <Card name="PICANHA" shortDescription="" />
        <Card name="MAMINHA" shortDescription="" />
        <Card name="ENTRECOT" shortDescription="" />
        <Card name="VAZIO" shortDescription="" />
      </div>
    ),
    Churrasco: (
      <div className={styles.gridCards}>
        <Card name="COSTELA GRILL" shortDescription="" />
        <Card name="COSTELA EM TIRA" shortDescription="" />
      </div>
    ),
    Pampeira: (
      <div className={styles.gridCards}>
        <Card name="ALCATRA" shortDescription="" />
      </div>
    ),
  };
  const currentLine = useCurrentLine();
  const content = contentMap[currentLine];

  if (!content) {
    return <span>Selecione uma linha para visualizar os produtos</span>;
  }

  return <div className={styles.menuCardsContainer}>{content}</div>;
}
