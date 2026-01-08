import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products, type Product } from "../../data/products.ts";
import { Typewriter } from "../../components/Typewriter.tsx";
import "./styles.module.css";

export function Menu() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Linha atual baseada na URL (linha clicada na home) ou usa padrão
  const currentLine = searchParams.get("linha") || "Boutique";

  // Controle do Produto Selecionado (Display)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filtra os produtos com base na linha atual
  const filteredProducts = products.filter((p) => p.line === currentLine);

  // Função para mudar a linha (atualiza URL)
  const handleLineChange = (newLine: string) => {
    setSearchParams({ linha: newLine }); //IMPORTANTE -----------------------------------------
    setSelectedProduct(null); // Limpa o display ao trocar de linha
  };

  // Função para definir a imagem do banner dinamicamente baseado no currentLine
  const getBannerImage = (line: string) => {
    // Mapeamento de linhas para imagens (Record<Key, Value>)
    const banners: Record<string, string> = {
      Boutique: "/assets/menu/text-linha-boutique.png",
      "Novilho Jovem": "/assets/menu/text-linha-N-J.png",
      Churrasco: "/assets/menu/text-linha-churrasco.png",
      // ...
    };
    return banners[line] || banners["Boutique"];
  };

  return (
    <div className="menu-container">
      {/* --- BANNER --- */}
      <div className="menu-banner">
        <img
          src={getBannerImage(currentLine)}
          alt={`Linha ${currentLine}`}
          className="menu-title"
        />
        {/* Outras imagens do banner... */}
      </div>

      {/* --- BOTÕES DE NAVEGAÇÃO (TABS) --- */}
      <div className="linhas-nav">
        {["Boutique", "Novilho Jovem", "Pampeira", "Churrasco", "Produtos"].map(
          (line) => (
            <button
              key={line}
              id={`linha${line.replace(/\s/g, "")}`}
              className={currentLine === line ? "menu-selected" : ""}
              onClick={() => handleLineChange(line)}
            >
              Linha {line}
            </button>
          )
        )}
      </div>

      {/* --- GRID DE CARDS --- */}
      <div className="menu-cards-container">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="menu-card"
            onClick={() => setSelectedProduct(product)} // Clicou, jogou no display
          >
            <img src={product.imgSrc} alt={product.name} />
            <div className="menu-card-text">
              <div className="card-text-main">
                <h3>{product.name}</h3>
                {/* Usamos slice para uma descrição curta no card */}
                <p>{product.description.slice(0, 50)}...</p>
              </div>
              <button>Saiba mais</button>
            </div>
          </div>
        ))}
      </div>

      {/* --- DISPLAY (DETALHES) --- */}
      {/* Só renderiza se tiver um produto selecionado */}
      {selectedProduct && (
        <div id="display" className="display-active">
          <div id="display-focus"></div>

          <div className="display-main-information">
            <h1 className="silver-gradient-right">{selectedProduct.name}</h1>

            <div className="display-img-container">
              {/* key muda para forçar a animação de pop quando troca a imagem */}
              <img
                key={selectedProduct.imgSrc}
                src={selectedProduct.imgSrc}
                className="animation-display-img"
              />
            </div>

            {/* Componente Typewriter cuida da animação de texto */}
            <Typewriter text={`“${selectedProduct.description}”`} />
          </div>

          <div className="acompanhamentos-container">
            <span className="silver-gradient-right">acompanhamentos</span>
            {selectedProduct.sides.map((side, index) => (
              <div key={index} className="acompanhamento">
                <div className="display-icon-container">
                  <img src={side.icon} alt="ícone" />
                </div>
                <p>{side.name}</p>
              </div>
            ))}
          </div>

          <div className="harmonizacoes-container">
            <span className="silver-gradient-right">harmonizações</span>
            {selectedProduct.pairings.map((pair, index) => (
              <div key={index} className="harmonizacao">
                <div className="display-icon-container">
                  <img src={pair.icon} alt="ícone" />
                </div>
                <p>{pair.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
