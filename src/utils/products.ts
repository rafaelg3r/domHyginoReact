import denverImg from "../assets/menu/carnes/denver-medium.png";
import cowboyImg from "../assets/menu/carnes/cowboy-medium.png";
import shoulderImg from "../assets/menu/carnes/shoulder-medium.png";
import steakShoulderImg from "../assets/menu/carnes/steak-medium.png";
import houseRibImg from "../assets/menu/carnes/house-rib-medium.png";
import contrafileImg from "../assets/menu/carnes/contrafile-medium.png";
import picanhaImg from "../assets/menu/carnes/picanha-medium.png";
import maminhaImg from "../assets/menu/carnes/maminha-medium.png";
import entrecotImg from "../assets/menu/carnes/entrecot-medium.png";
import vazioImg from "../assets/menu/carnes/vazio-medium.png";
import alcatraImg from "../assets/menu/carnes/alcatra-medium.png";
import costelaGrillImg from "../assets/menu/carnes/costela-grill-medium.png";
import costelaTiraImg from "../assets/menu/carnes/costela-em-tira-medium.png";

import acompanhamentoIcon from "../assets/icons/acompanhamento-icon.svg";
import molhoIcon from "../assets/icons/molho-icon.svg";
import bebidaIcon from "../assets/icons/bebida-icon.svg";

export type Product = {
  name: string;
  line: "Boutique" | "Novilho Jovem" | "Churrasco" | "Pampeira" | "Produtos";
  description: string;
  sides: { name: string; icon: string }[];
  pairings: { name: string; icon: string }[];
  image: string;
};

export const products: Product[] = [
  // LINHA BOUTIQUE
  {
    name: "Denver",
    line: "Boutique",
    image: denverImg,
    description:
      "Corte da parte dianteira da alcatra, muito macio e suculento, ideal para grelhar ou assar.",
    sides: [{ name: "Farofa crocante", icon: acompanhamentoIcon }],
    pairings: [
      { name: "Molho chimichurri", icon: molhoIcon },
      { name: "Vinho tinto Cabernet Sauvignon", icon: bebidaIcon },
    ],
  },
  {
    name: "Cowboy",
    line: "Boutique",
    image: cowboyImg,
    description:
      "Corte alto da costela, com sabor intenso e marmoreio que derrete na boca.",
    sides: [{ name: "Batata rústica", icon: acompanhamentoIcon }],
    pairings: [
      { name: "Molho barbecue defumado", icon: molhoIcon },
      { name: "Cerveja tipo IPA", icon: bebidaIcon },
    ],
  },
  {
    name: "Shoulder",
    line: "Boutique",
    image: shoulderImg,
    description:
      "Corte da parte dianteira do boi, muito saboroso e ideal para churrasco ou panela.",
    sides: [{ name: "Vinagrete especial", icon: acompanhamentoIcon }],
    pairings: [
      { name: "Molho de mostarda", icon: molhoIcon },
      { name: "Vinho Merlot suave", icon: bebidaIcon },
    ],
  },
  {
    name: "Steak Shoulder",
    line: "Boutique",
    image: steakShoulderImg,
    description:
      "Corte macio da paleta, perfeito para grelhar rapidamente e manter suculência.",
    sides: [{ name: "Legumes grelhados", icon: acompanhamentoIcon }],
    pairings: [
      { name: "Molho de ervas finas", icon: molhoIcon },
      { name: "Vinho tinto Malbec", icon: bebidaIcon },
    ],
  },
  {
    name: "House Rib",
    line: "Boutique",
    image: houseRibImg,
    description:
      "Costela macia com excelente marmoreio, perfeita para assados longos.",
    sides: [{ name: "Purê de batata", icon: acompanhamentoIcon }],
    pairings: [
      { name: "Molho barbecue defumado", icon: molhoIcon },
      { name: "Cerveja tipo Lager", icon: bebidaIcon },
    ],
  },

  // LINHA NOVILHO JOVEM
  {
    name: "Contrafilé",
    line: "Novilho Jovem",
    image: contrafileImg,
    description:
      "Corte clássico da lombar, suculento e macio, ideal para grelhar ou assar.",
    sides: [
      { name: "Farofa de cebola caramelizada", icon: acompanhamentoIcon },
    ],
    pairings: [
      { name: "Molho de pimenta artesanal", icon: molhoIcon },
      { name: "Vinho tinto Syrah", icon: bebidaIcon },
    ],
  },
  {
    name: "Picanha",
    line: "Novilho Jovem",
    image: picanhaImg,
    description:
      "Corte nobre, conhecido pelo sabor marcante e capa de gordura que derrete ao assar.",
    sides: [{ name: "Arroz com alho", icon: acompanhamentoIcon }],
    pairings: [
      { name: "Molho barbecue caseiro", icon: molhoIcon },
      { name: "Vinho Tannat encorpado", icon: bebidaIcon },
    ],
  },
  {
    name: "Maminha",
    line: "Novilho Jovem",
    image: maminhaImg,
    description:
      "Corte da ponta da alcatra, macio e saboroso, ótimo para grelhar inteiro.",
    sides: [{ name: "Salada verde", icon: acompanhamentoIcon }],
    pairings: [
      { name: "Molho de ervas", icon: molhoIcon },
      { name: "Vinho Cabernet Franc", icon: bebidaIcon },
    ],
  },
  {
    name: "Entrecot",
    line: "Novilho Jovem",
    image: entrecotImg,
    description:
      "Corte suculento da parte central do contrafilé, ideal para grelhar na brasa.",
    sides: [{ name: "Legumes assados", icon: acompanhamentoIcon }],
    pairings: [
      { name: "Molho gorgonzola", icon: molhoIcon },
      { name: "Vinho Merlot", icon: bebidaIcon },
    ],
  },
  {
    name: "Vazio",
    line: "Novilho Jovem",
    image: vazioImg,
    description:
      "Corte do dianteiro do boi, muito saboroso e suculento, ótimo para churrasco.",
    sides: [{ name: "Farofa de bacon", icon: acompanhamentoIcon }],
    pairings: [
      { name: "Molho de cebola caramelizada", icon: molhoIcon },
      { name: "Cerveja artesanal", icon: bebidaIcon },
    ],
  },

  // LINHA PAMPEIRA
  {
    name: "Alcatra",
    line: "Pampeira",
    image: alcatraImg,
    description:
      "Corte macio da parte traseira, com ótimo marmoreio e sabor equilibrado.",
    sides: [{ name: "Farofa de ovos", icon: acompanhamentoIcon }],
    pairings: [
      { name: "Molho barbecue clássico", icon: molhoIcon },
      { name: "Vinho Malbec", icon: bebidaIcon },
    ],
  },

  // LINHA CHURRASCO
  {
    name: "Costela Grill",
    line: "Churrasco",
    image: costelaGrillImg,
    description:
      "Costela macia assada lentamente, com sabor intenso e suculento.",
    sides: [{ name: "Purê de mandioca", icon: acompanhamentoIcon }],
    pairings: [
      { name: "Molho barbecue defumado", icon: molhoIcon },
      { name: "Vinho Tannat", icon: bebidaIcon },
    ],
  },
  {
    name: "Costela em Tira",
    line: "Churrasco",
    image: costelaTiraImg,
    description:
      "Costela cortada em tiras, ótima para churrasco, suculenta e saborosa.",
    sides: [{ name: "Farofa temperada", icon: acompanhamentoIcon }],
    pairings: [
      { name: "Molho barbecue artesanal", icon: molhoIcon },
      { name: "Cerveja preta", icon: bebidaIcon },
    ],
  },
];
