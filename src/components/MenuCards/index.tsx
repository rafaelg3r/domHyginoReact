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
        <Card
          name="DENVER"
          shortDescription="Maciez e sabor suave"
          link="/menu?linha=Boutique&carne=denver"
        />
        <Card
          name="COWBOY"
          shortDescription="Suculento, macio e saboroso"
          link="/menu?linha=Boutique&carne=cowboy"
        />
        <Card
          name="SHOULDER"
          shortDescription="Sabor intenso e textura marmorizada"
          link="/menu?linha=Boutique&carne=shoulder"
        />
        <Card
          name="STEAK SHOULDER"
          shortDescription="Corte magro, macio e versátil"
          link="/menu?linha=Boutique&carne=steak shoulder"
        />
        <Card
          name="HOUSE RIB"
          shortDescription="Costela premium com maciez extrema"
          link="/menu?linha=Boutique&carne=house rib"
        />
      </div>
    ),
    "Novilho Jovem": (
      <div className={styles.gridCards}>
        <Card
          name="CONTRAFILÉ"
          shortDescription="Suculento com capa de gordura"
          link="/menu?linha=Novilho Jovem&carne=contrafilé"
        />
        <Card
          name="PICANHA"
          shortDescription="Corte nobre com capa de gordura clássica"
          link="/menu?linha=Novilho Jovem&carne=picanha"
        />
        <Card
          name="MAMINHA"
          shortDescription="Maciez incomparável e sabor acentuado"
          link="/menu?linha=Novilho Jovem&carne=maminha"
        />
        <Card
          name="ENTRECOT"
          shortDescription="Marmoreio rico e suculência premium"
          link="/menu?linha=Novilho Jovem&carne=entrecot"
        />
        <Card
          name="VAZIO"
          shortDescription="Típico churrasco gaúcho, muito saboroso"
          link="/menu?linha=Novilho Jovem&carne=vazio"
        />
      </div>
    ),
    Churrasco: (
      <div className={styles.gridCards}>
        <Card
          name="COSTELA GRILL"
          shortDescription="Assado de tira macio e irresistível"
          link="/menu?linha=Churrasco&carne=costela grill"
        />
        <Card
          name="COSTELA EM TIRA"
          shortDescription="Sabor tradicional e suculência"
          link="/menu?linha=Churrasco&carne=costela em tira"
        />
      </div>
    ),
    Pampeira: (
      <div className={styles.gridCards}>
        <Card
          name="ALCATRA"
          shortDescription="Corte magro, macio e de sabor equilibrado"
          link="/menu?linha=Pampeira&carne=alcatra"
        />
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
