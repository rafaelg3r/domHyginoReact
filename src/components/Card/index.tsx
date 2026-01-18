import styles from "./styles.module.css";

import { Button } from "../Button";
import { HashLink as Link } from "react-router-hash-link";

import denverImg from "../../assets/menu/carnes/denver-small.png";
import cowboyImg from "../../assets/menu/carnes/cowboy-small.png";
import shoulderImg from "../../assets/menu/carnes/shoulder-small.png";
import shoulderSteakImg from "../../assets/menu/carnes/steak-small.png";
import houseHibImg from "../../assets/menu/carnes/house-hib-small.png";

import contrafileImg from "../../assets/menu/carnes/contrafile-small.png";
import picanhaImg from "../../assets/menu/carnes/picanha-small.png";
import maminhaImg from "../../assets/menu/carnes/maminha-small.png";
import entrecotImg from "../../assets/menu/carnes/entrecot-small.png";
import vazioImg from "../../assets/menu/carnes/vazio-small.png";

import constelaGrillImg from "../../assets/menu/carnes/costela-grill-small.png";
import costelaEmTiraImg from "../../assets/menu/carnes/costela-tira-small.png";

import alcatraImg from "../../assets/menu/carnes/alcatra-small.png";

type CardProps = {
  name: string;
  shortDescription: string;
  link: string;
};

export function Card({ name, shortDescription, link }: CardProps) {
  //mapeamento de imagens
  const imageMap: Record<string, string> = {
    DENVER: denverImg,
    COWBOY: cowboyImg,
    SHOULDER: shoulderImg,
    "STEAK SHOULDER": shoulderSteakImg,
    "HOUSE RIB": houseHibImg,
    CONTRAFILÉ: contrafileImg,
    PICANHA: picanhaImg,
    MAMINHA: maminhaImg,
    ENTRECOT: entrecotImg,
    VAZIO: vazioImg,
    "COSTELA GRILL": constelaGrillImg,
    "COSTELA EM TIRA": costelaEmTiraImg,
    ALCATRA: alcatraImg,
  };
  const image = imageMap[name];

  if (!image) {
    throw new Error("Imagem não encontrada");
  }

  return (
    <>
      <Link className={styles.cardContainer} to={link} draggable="false">
        <div className={styles.cardImgContainer}>
          <img
            src={image}
            alt={` Imagem da carne ${name.toLocaleLowerCase()}`}
          />
          <div className={styles.hoverContent}>
            <div className={styles.hoverText}>
              <strong>{name}</strong>
              <span>{shortDescription}</span>
            </div>
            <Button size="small" className={styles.cardBtn}>
              saiba mais
            </Button>
          </div>
        </div>
        <div className={styles.textContainer}>
          <strong>{name}</strong>
          <span>{shortDescription}</span>
        </div>
      </Link>
    </>
  );
}
