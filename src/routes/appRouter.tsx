import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";

export function AppRouter() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </AnimatePresence>
  );
}
