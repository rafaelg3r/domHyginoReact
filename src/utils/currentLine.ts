import { useSearchParams } from "react-router-dom";

export function useCurrentLine() {
  const [searchParams] = useSearchParams();

  const currentLine = searchParams.get("linha");
  // Retorna a linha da URL ou o valor padrão "Boutique"
  return currentLine || "Boutique";
}
