import React from "react";

import Button from "../../components/Button";

import styles from "./ThirdPage.module.scss";

const ThirdPage = () => {
  return (
    <div className={`${styles.wrapper} backgroundImage`}>
      <div className={styles.content}>
        <div className={styles.top}>
          <span className={`mainSuptitle ${styles.suptitle}`}>
            ключевое сообщение
          </span>
          <h2 className="mainTitle">
            BREND<span className="mainTitleBold">XY</span>
          </h2>
        </div>
        <div className={styles.info}>
          <div
            className={`${styles.infoItem} ${styles.infoItemBig} mainBoxShadow`}
          >
            <p className={`${styles.infoText} ${styles.plateIcon}`}>
              Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus
              vestibulum lorem sed risus ultricies
            </p>
          </div>
          <div className={`${styles.infoItem} mainBoxShadow`}>
            <p className={`${styles.infoText} ${styles.scheduleIcon}`}>
              A arcu <br /> cursus vitae
            </p>
          </div>
          <Button icon="plus">Подробнее</Button>
        </div>
      </div>
      <div className={`${styles.bottleImg} backgroundImage`} />
    </div>
  );
};

export default ThirdPage;
