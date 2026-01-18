import styles from "./styles.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useCurrentLine } from "../../utils/currentLine";
import { GradientText } from "../GradientText";

export function LineFilter() {
  const currentLine = useCurrentLine();
  const selectedLine = currentLine?.toLocaleLowerCase();

  return (
    <>
      <div className={styles.menuSelectors}>
        <div className={styles.menuLinhas}>
          <div className={styles.selectorTitle}>
            <GradientText variant="mid" as="strong">
              Linhas
            </GradientText>
          </div>
          <div className={styles.selectorOptions}>
            <Link
              to="?linha=Boutique"
              className={clsx(
                styles.selectorLink,
                selectedLine === "boutique" && styles.menuSelected,
              )}
            >
              boutique
            </Link>
            <Link
              to="?linha=Novilho Jovem"
              className={clsx(
                styles.selectorLink,
                selectedLine === "novilho jovem" && styles.menuSelected,
              )}
            >
              novilho jovem
            </Link>
            <Link
              to="?linha=Churrasco"
              className={clsx(
                styles.selectorLink,
                selectedLine === "churrasco" && styles.menuSelected,
              )}
            >
              churrasco
            </Link>
            <Link
              to="?linha=Pampeira"
              className={clsx(
                styles.selectorLink,
                selectedLine === "pampeira" && styles.menuSelected,
              )}
            >
              pampeira
            </Link>
            {/* <Link to="?linha=Produtos">Produtos</Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
