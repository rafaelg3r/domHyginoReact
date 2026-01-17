import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.css";
// Importe sua logo
import LogoSlim from "../../assets/logos/logoSlim.png";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className={styles.loaderContainer}
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.6, // deslizamento
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          <motion.img
            src={LogoSlim}
            alt="Logo"
            className={styles.loaderLogo}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -50 }}
            // transition={{ duration: 0.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
