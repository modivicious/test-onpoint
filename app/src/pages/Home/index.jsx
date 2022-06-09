import React from "react";

import Button from "../../components/Button";

import styles from "./Home.module.scss";

const Home = ({ changeActivePage }) => {
  return (
    <div className={`${styles.wrapper} backgroundImage`}>
      <div className={styles.content}>
        <div className={styles.text}>
          <span className={styles.suptitle}>привет,</span>
          <h1 className={styles.title}>
            это <span className={styles.bold}>не</span> <br />
            коммерческое <br />
            задание <br />
          </h1>
          <div className={styles.btnWrapper}>
            <Button
              icon="arrow"
              type="button"
              onClick={() => changeActivePage(1)}
            >
              Что дальше?
            </Button>
          </div>
        </div>
      </div>
      <img
        className={`${styles.decorImg} ${styles.decorImg1}`}
        src="../../../images/content/HomePage/1.png"
        alt=""
      />
      <img
        className={`${styles.decorImg} ${styles.decorImg2}`}
        src="../../../images/content/HomePage/2.png"
        alt=""
      />
      <img
        className={`${styles.decorImg} ${styles.decorImg3}`}
        src="../../../images/content/HomePage/3.png"
        alt=""
      />
      <img
        className={`${styles.decorImg} ${styles.decorImg4}`}
        src="../../../images/content/HomePage/4.png"
        alt=""
      />
      <img
        className={`${styles.decorImg} ${styles.decorImg5}`}
        src="../../../images/content/HomePage/5.png"
        alt=""
      />
      <img
        className={`${styles.decorImg} ${styles.decorImg6}`}
        src="../../../images/content/HomePage/6.png"
        alt=""
      />
      <img
        className={`${styles.decorImg} ${styles.decorImg7}`}
        src="../../../images/content/HomePage/7.png"
        alt=""
      />
      <img
        className={`${styles.decorImg} ${styles.decorImg8}`}
        src="../../../images/content/HomePage/8.png"
        alt=""
      />
      <img
          className={`${styles.decorImg} ${styles.decorImg9}`}
          src="../../../images/content/HomePage/9.png"
          alt=""
        />
    </div>
  );
};

export default Home;
