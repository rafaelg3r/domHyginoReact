import styles from "./styles.module.css";
// import { useState } from "react";
import { useSearchParams } from "react-router-dom";
// import { products, type Product } from "../../data/products";

import Contrafile from "../../assets/menu/carnes/contra-file-design-clean.png";
import TextNovilho from "../../assets/menu/linhas-banner/textNovilho.png";
import TextBoutique from "../../assets/menu/linhas-banner/textBoutique.png";
import TextPampeira from "../../assets/menu/linhas-banner/textPampeira.png";
import TextChurrasco from "../../assets/menu/linhas-banner/textChurrasco.png";

export function SectionBanner() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Linha atual baseada na URL ou usa default
  const currentLine = searchParams.get("linha") || "Boutique";

  // Mapeamento de linhas para imagens (Record<Key, Value>)
  const bannersText: Record<string, string> = {
    boutique: TextBoutique,
    "novilho jovem": TextNovilho,
    pampeira: TextPampeira,
    churrasco: TextChurrasco,
  };
  type BannerKeys = keyof typeof bannersText;
  const bannerLine =
    bannersText[currentLine.toLocaleLowerCase() as BannerKeys] || TextBoutique;

  // Controle do Produto Selecionado (Display)
  //  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filtra os produtos com base na linha atual
  //  const filteredProducts = products.filter((p) => p.line === currentLine);

  // Função para mudar a linha (atualiza URL)
  // const handleLineChange = (newLine: string) => {
  //   setSearchParams({ linha: newLine }); // IMPORTANTE -----------------------------------------
  //   setSelectedProduct(null); //Limpa o display ao trocar de linha
  // };

  //Função para definir a imagem do banner dinamicamente baseado no currentLine

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.menuBanner}>
        <picture className={styles.menuTitle}>
          <source media="(min-width: 1081px)" srcSet={bannerLine} />
          <img id="banner-title" src={bannerLine} alt="Linha novilho jovem" />
        </picture>
        <picture className={styles.menuBannerSteak}>
          <source media="(min-width: 1081px)" srcSet={Contrafile} />
          <img
            width="288px"
            className={styles.bannerImage}
            src={Contrafile}
            alt="carne contra file"
          />
        </picture>
      </div>
      <div className={styles.bannerlLine}></div>
    </div>
  );
}
