import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Menu } from "../pages/Menu";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  );
}
