import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={require("../../../images/logo.svg")} alt="Лого" />
    </footer>
  );
};

export default Footer;
