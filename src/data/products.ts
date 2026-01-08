export interface Product {
  id: string;
  name: string;
  line: "Boutique" | "Novilho Jovem" | "Churrasco" | "Pampeira" | "Produtos";
  imgSrc: string;
  description: string;
  sides: { name: string; icon: string }[];
  pairings: { name: string; icon: string }[];
}

export const products: Product[] = [
  {
    id: "denver",
    name: "Denver",
    line: "Boutique",
    imgSrc: "/assets/menu/menu-card-denver.png", // Caminho na pasta public
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
    id: "picanha",
    name: "Picanha",
    line: "Novilho Jovem",
    imgSrc: "/assets/menu/menu-card-picanha.png",
    description: "Corte nobre, conhecido pelo sabor marcante...",
    sides: [
      { name: "Arroz com alho", icon: "/assets/icons/acompanhamento.svg" },
    ],
    pairings: [
      { name: "Molho barbecue", icon: "/assets/icons/molho.svg" },
      { name: "Vinho Tannat", icon: "/assets/icons/vinho.svg" },
    ],
  },
  // ... adicione os outros produtos aqui seguindo esse padrão
];
