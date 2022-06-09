import React from "react";

import styles from "./Modal.module.scss";

const Modal = ({ children, active, setActive }) => {
  return (
    <div
      className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => setActive(false)}
      onTouchStart={(e) => e.stopPropagation()}
      onTouchEnd={(e) => e.stopPropagation()}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
        <button
          className={`${styles.closeBtn} backgroundImage`}
          onClick={() => setActive(false)}
          type="button"
          aria-label="Закрыть"
        />
      </div>
    </div>
  );
};

export default Modal;
