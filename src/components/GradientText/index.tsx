import { type ElementType, type ReactNode } from "react";
import clsx from "clsx"; // Instale: npm install clsx
import styles from "./styles.module.css";

interface GradientTextProps {
  children: ReactNode;
  variant?: "left" | "right" | "mid";
  as?: ElementType;
  className?: string;
}

export function GradientText({
  children,
  variant = "right",
  as: Tag = "span",
  className,
  
}: GradientTextProps) {
  return <Tag className={clsx(styles[variant], className)}>{children}</Tag>;
}
