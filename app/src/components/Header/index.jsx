import React from "react";

import styles from "./Header.module.scss";

const Header = ({ changeActivePage }) => {
  return (
    <header className={styles.header}>
      <button className={styles.homeBtn} onClick={() => changeActivePage(0)} />
      <span className={styles.separator} />
      <span className={styles.name}>PROJECT</span>
    </header>
  );
};

export default Header;
