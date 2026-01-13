export interface Product {
  name: string;
  line: "Boutique" | "Novilho Jovem" | "Churrasco" | "Pampeira" | "Produtos";
  description: string;
  sides: { name: string; icon: string }[];
  pairings: { name: string; icon: string }[];
}

export const products: Product[] = [
  {
    name: "Denver",
    line: "Boutique",
    description:
      "Corte da parte dianteira da alcatra, muito macio e suculento...",
    sides: [
      { name: "Farofa crocante", icon: "/assets/icons/acompanhamento.svg" },
    ],
    pairings: [
      { name: "Molho chimichurri", icon: "/assets/icons/molho.svg" },
      { name: "Vinho tinto Cabernet", icon: "/assets/icons/vinho.svg" },
    ],
  },
  {
    name: "Cowboy",
    line: "Boutique",
    description:
      "Corte alto da costela, com sabor intenso e marmoreio que derrete na boca.",
    sides: [
      { name: "Farofa crocante", icon: "/assets/icons/acompanhamento.svg" },
    ],
    pairings: [
      { name: "Molho chimichurri", icon: "/assets/icons/molho.svg" },
      { name: "Vinho tinto Cabernet", icon: "/assets/icons/vinho.svg" },
    ],
  },
  {
    name: "Shoulder",
    line: "Boutique",
    description:
      "Corte da parte dianteira da alcatra, muito macio e suculento...",
    sides: [
      { name: "Farofa crocante", icon: "/assets/icons/acompanhamento.svg" },
    ],
    pairings: [
      { name: "Molho chimichurri", icon: "/assets/icons/molho.svg" },
      { name: "Vinho tinto Cabernet", icon: "/assets/icons/vinho.svg" },
    ],
  },
  {
    name: "Steak Shoulder",
    line: "Boutique",
    description:
      "Corte da parte dianteira da alcatra, muito macio e suculento...",
    sides: [
      { name: "Farofa crocante", icon: "/assets/icons/acompanhamento.svg" },
    ],
    pairings: [
      { name: "Molho chimichurri", icon: "/assets/icons/molho.svg" },
      { name: "Vinho tinto Cabernet", icon: "/assets/icons/vinho.svg" },
    ],
  },
  {
    name: "House Hib",
    line: "Boutique",
    description:
      "Corte da parte dianteira da alcatra, muito macio e suculento...",
    sides: [
      { name: "Farofa crocante", icon: "/assets/icons/acompanhamento.svg" },
    ],
    pairings: [
      { name: "Molho chimichurri", icon: "/assets/icons/molho.svg" },
      { name: "Vinho tinto Cabernet", icon: "/assets/icons/vinho.svg" },
    ],
  },
  {
    name: "Picanha",
    line: "Novilho Jovem",
    description: "Corte nobre, conhecido pelo sabor marcante...",
    sides: [
      { name: "Arroz com alho", icon: "/assets/icons/acompanhamento.svg" },
    ],
    pairings: [
      { name: "Molho barbecue", icon: "/assets/icons/molho.svg" },
      { name: "Vinho Tannat", icon: "/assets/icons/vinho.svg" },
    ],
  },
];
