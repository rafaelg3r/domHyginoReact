import styles from "./styles.module.css";

type ButtonProps = {
  children: React.ReactNode;
  size: "small" | "medium" | "big";
  border?: boolean;
};
export function Button({ children, size, border }: ButtonProps) {
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
        <button className={`${styles.btn} ${classes}`}>{children}</button>
      </>
    );
  } else {
    return (
      <>
        <button className={`${styles.btn} ${borderClasses}`}>
          {children}
        </button>
      </>
    );
  }
}
