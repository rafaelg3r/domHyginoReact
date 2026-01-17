import styles from "./styles.module.css";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  size: "small" | "medium" | "big";
  border?: boolean;
  className?: string;
};
export function Button({ children, size, border, className }: ButtonProps) {
  const sizeMaps = {
    small: styles.small,
    medium: styles.medium,
    big: styles.big,
  };

  const borderMaps = {
    small: styles.borderSmall,
    medium: styles.borderMedium,
    big: styles.borderBig,
  };

  // Uso:
  const classes = sizeMaps[size];
  const borderClasses = `${styles.border} ${borderMaps[size]}`;

  if (!border) {
    return (
      <>
        <button className={clsx(styles.btn, classes, className)}>
          {children}
        </button>
      </>
    );
  } else {
    return (
      <>
        <button className={clsx(styles.btn, borderClasses, className)}>
          {children}
        </button>
      </>
    );
  }
}
