import styles from "./styles.module.css";
import { GradientText } from "../../components/GradientText";
import { HashLink as Link } from "react-router-hash-link";
import { Button } from "../../components/Button";

//Imagens
import topBg from "../../assets/home/cortes/cortes-top-bg.png";
import topBgPhone from "../../assets/home/cortes/cortes-top-bg-phone.png";
import bottomBg from "../../assets/home/cortes/cortes-bottom-bg.png";
import bottomBgPhone from "../../assets/home/cortes/cortes-bottom-bg-phone.png";

export function SectionCortes() {
  return (
    <>
      <section id="cortes" className={styles.cortesMenu}>
        <picture>
          <source srcSet={topBgPhone} media="(max-width: 768px)" />
          <img draggable="false" src={topBg} className={styles.cortesTopBg} />
        </picture>
        <div className={styles.cortesMenuContainer}>
          <GradientText
            as="h2"
            variant="mid"
            className={styles.cortesMenuTitle}
          >
            Cortes
          </GradientText>
        </div>
        <div className={styles.menuSelectorsContainer}>
          <div className={styles.linhaBoutique}>
            <div className={styles.menuText}>
              <GradientText as="h2" variant="left">
                linha boutique
              </GradientText>
              <p>
                A Linha Boutique representa o mais alto padrão em cortes
                premium. Indicada para quem busca uma experiência gastronômica
                fora da curva!
              </p>
              <Link to="/menu?linha=Boutique">
                <Button size="medium">--- Acessar Linha ---</Button>
              </Link>
            </div>
          </div>
          <div className={styles.linhaNovilho}>
            <div className={styles.menuText}>
              <GradientText as="h2" variant="right">
                linha novilho jovem
              </GradientText>
              <p>
                A Linha Novilho Jovem traz cortes selecionados de animais
                britânicos. Escolha ideal tanto para o churrasco quanto para o
                dia a dia! É uma linha versátil que une tradição e qualidade
                para todos os momentos.
              </p>
              <Link to="/menu?linha=Novilho Jovem">
                <Button size="medium">--- Acessar Linha ---</Button>
              </Link>
            </div>
          </div>
          <div className={styles.linhaChurrasco}>
            <div className={styles.menuText}>
              <GradientText as="h2" variant="left">
                linha churrasco
              </GradientText>
              <p>
                A Linha Churrasco oferece cortes tradicionais que carregam a
                essência da culinária gaúcha. Reconhecida pelo preço competitivo
                e pelo verdadeiro sabor do Sul, é a linha que valoriza a
                tradição, a rusticidade e o gosto autêntico da carne bem feita.
              </p>
              <Link to="/menu?linha=Churrasco">
                <Button size="medium">--- Acessar Linha ---</Button>
              </Link>
            </div>
          </div>
          <div className={styles.linhaPampeira}>
            <div className={styles.menuText}>
              <GradientText as="h2" variant="right">
                linha pampeira
              </GradientText>
              <p>
                A Linha Pampeira é a escolha perfeita para o dia a dia, unindo
                sabor e economia sem abrir mão da qualidade. Oferece cortes
                economy, ideais para refeições práticas e acessíveis, mantendo o
                verdadeiro gosto da carne bem preparada.
              </p>

              <Link to="/menu?linha=Pampeira">
                <Button size="medium">--- Acessar Linha ---</Button>
              </Link>
            </div>
          </div>

          {/* <div className={styles.linhaProdutos}>
          <div className={styles.menuText}>
            <GradientText as="h2" variant="left">Produtos</GradientText>
            <p>
              Explore nossa linha de produtos variados, com uma seleção especial
              de acompanhamentos, temperos e itens gourmet que elevam o sabor do
              seu churrasco. Perfeitos para complementar carnes e transformar
              cada preparo em uma experiência única!
            </p>  
            <Link to="/menu?linha=Produtos"><button>--- Acessar Produtos ---</button></Link
            >
          </div>
        </div>*/}
        </div>
        <picture>
          <source srcSet={bottomBgPhone} media="(max-width: 768px)" />
          <img
            draggable="false"
            src={bottomBg}
            className={styles.cortesBottombg}
          />
        </picture>
      </section>
    </>
  );
}
