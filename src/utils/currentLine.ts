import { useSearchParams } from "react-router-dom";

export function useCurrentLine() {
  const [searchParams] = useSearchParams();

  const currentLine = searchParams.get("linha");
  // Retorna a linha selecionada na URL
  return currentLine || "Boutique";
}

export function useCurrentSteak() {
  const [searchParams] = useSearchParams();
  // Retorna a carne selecionada na URL
  const currentSteak = searchParams.get("carne");
  return currentSteak || "";
}
