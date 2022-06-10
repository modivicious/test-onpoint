import React from "react";

import styles from "./Button.module.scss";

const Button = ({ children, icon, onClick, ...attrs }) => {
  return (
    <button className={`${styles.btn}`} onClick={onClick} {...attrs}>
      <div className={`${styles.circle} ${styles[icon]}`} />
      {children}
    </button>
  );
};

export default Button;
