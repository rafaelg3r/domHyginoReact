import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Criamos o timer

    if (location.hash) {
      return;
    }

    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 800); // 1000 milissegundos = 1 segundo

    // Função de limpeza (cleanup)
    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return null;
}
