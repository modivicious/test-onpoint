import React from "react";

import Button from "../../components/Button";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.text}>
          <span className={styles.suptitle}>привет,</span>
          <h1 className={styles.title}>
            это <span className={styles.bold}>не</span> <br />
            коммерческое <br />
            задание <br />
          </h1>
          <div className={styles.btnWrapper}>
            <Button icon="arrow" type="button">
              Что дальше?
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
