import styles from "./styles.module.css";
import { GradientText } from "../../components/GradientText";
import { Button } from "../../components/Button";

export function SectionFranqueado() {
  return (
    <>
      <div className={styles.gridBg}>
        <section className={styles.franqueados}>
          <div className={styles.franqueadosContainer}>
            <GradientText as="h2" variant="mid" className={styles.title}>
              Quer ser um franqueado<span>?</span>
            </GradientText>
            <p className={styles.text}>
              Leve a tradição da Dom Hygino para a sua cidade! <br />
              Há Anos, a Dom Hygino se destaca pela qualidade, confiança e
              excelência no mercado de carnes. Construímos uma marca forte, com
              identidade própria, atendimento diferenciado e um compromisso
              inabalável com o sabor e a experiência do cliente. E agora, você
              pode fazer parte dessa história de sucesso!
            </p>
            <a href="https://wa.me/555599603419?text=Entre%20em%20contato%20com%20as%20lojas%20Dom%20Hygino!">
              <Button size="big">marcar uma reunião</Button>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
