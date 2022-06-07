import React from "react";

import styles from "./Button.module.scss";

const Button = ({ children, icon, ...attrs }) => {
  return (
    <button className={`${styles.btn} ${styles[icon]}`} {...attrs}>
      {children}
    </button>
  );
};

export default Button;
