import React from "react";

import styles from "./Button.module.scss";

const Button = ({ children, icon, onClick, ...attrs }) => {
  return (
    <button
      className={`${styles.btn} ${styles[icon]}`}
      onClick={onClick}
      {...attrs}
    >
      {children}
    </button>
  );
};

export default Button;
