import styles from "./styles.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

export function LineFilter() {
  const [searchParams] = useSearchParams();
  const currentLine = searchParams.get("linha");
  const selectedLine = currentLine?.toLocaleLowerCase();

  return (
    <>
      <div className={styles.menuSelectors}>
        <div className={styles.menuLinhas}>
          <strong className={styles.selectorTitle}>Linhas</strong>
          <div className={styles.selectorOptions}>
            <Link
              to="?linha=Boutique"
              className={clsx(
                styles.selectorLink,
                selectedLine === "boutique" && styles.menuSelected
              )}
            >
              Linha Boutique
            </Link>
            <Link
              to="?linha=Novilho Jovem"
              className={clsx(
                styles.selectorLink,
                selectedLine === "novilho jovem" && styles.menuSelected
              )}
            >
              Linha Novilho Jovem
            </Link>
            <Link
              to="?linha=Churrasco"
              className={clsx(
                styles.selectorLink,
                selectedLine === "churrasco" && styles.menuSelected
              )}
            >
              Linha Churrasco
            </Link>
            <Link
              to="?linha=Pampeira"
              className={clsx(
                styles.selectorLink,
                selectedLine === "pampeira" && styles.menuSelected
              )}
            >
              Linha Pampeira
            </Link>
            {/* <Link to="?linha=Produtos">Produtos</Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
