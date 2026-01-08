import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./global.css";

import { AppRouter } from "./routes/appRouter";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/dom-hygino-react/">
      <Navbar />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
