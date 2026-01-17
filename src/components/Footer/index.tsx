import styles from "./styles.module.css";

import { HashLink as Link } from "react-router-hash-link";

import logoDom from "../../assets/logos/logoSlim.png";
import logoCallegaro from "../../assets/logos/Callegaro.png";
export function Footer() {
  return (
    <>
      <footer>
        <div className={styles.mainFooter}>
          <div className={styles.footerUp}>
            <div className={styles.footerLogo}>
              <img
                loading="lazy"
                src={logoDom}
                alt="Logo da loja de carnes Dom Hygino"
              />
            </div>
            <div className={styles.footerContents}>
              <div className={styles.footerText}>
                <h4>Navegação</h4>
                <Link to="/#home">Início</Link>
                <Link to="/menu">Linhas</Link>
                <Link to="/#lojas">Lojas</Link>
                <Link to="/#about">Sobre</Link>
                {/* <Link to="/none">Blog</Link> */}
              </div>

              <div className={styles.footerText}>
                <h4>Contato</h4>
                <a href="https://wa.me/555599603419">(55) 99733-4022</a>
                <a href="">andre@domhygino.com.br</a>
                <a
                  href="https://maps.app.goo.gl/f8oZdjqXuCzhxapE8"
                  target="_blank"
                >
                  <address>
                    R. Santos Dumont, 26 - Centro, Santa Rosa - RS, 98780-322
                  </address>
                </a>
              </div>
              <div className={styles.footerText}>
                <h4>Parceiros</h4>
                <a
                  href="http://www.frigorificocallegaro.com.br/"
                  target="_blank"
                >
                  <img loading="lazy" src={logoCallegaro} alt="" />
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className={styles.footerRights}>
            <h4>Dom Higyno. Todos direitos reservados.</h4>
          </div>
        </div>
      </footer>
    </>
  );
}
