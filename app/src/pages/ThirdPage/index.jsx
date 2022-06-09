import React, { useState } from "react";

import Button from "../../components/Button";
import Modal from "../../components/Modal";
import Slider from "../../components/Slider";

import styles from "./ThirdPage.module.scss";

const ThirdPage = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const changeActiveSlide = (index) => {
    setActiveSlide(index);
  };

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
          <Button icon="plus" onClick={() => setIsModalActive(true)}>
            Подробнее
          </Button>
          <Modal active={isModalActive} setActive={setIsModalActive}>
            <div className="modalTop">
              <span className={`mainSuptitle ${styles.suptitle}`}>
                преимущества
              </span>
              <h2 className="mainTitle">
                BREND<span className="mainTitleBold">XY</span>
              </h2>
            </div>
            <div className="counterParent">
              <Slider
                width="500px"
                height="auto"
                threshold={70}
                activeIndex={activeSlide}
                changeActiveSlide={changeActiveSlide}
                controls
              >
                <div>
                  <div className="listItem">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                  <div className="listItem">
                    <p>Faucibus pulvinar elementum integer enim</p>
                  </div>
                  <div className="listItem">
                    <p>Faucibus pulvinar elementum integer enim</p>
                  </div>
                </div>
                <div>
                  <div className="listItem">
                    <p>Mi bibendum neque egestas congue quisque egestas diam</p>
                  </div>
                  <div className="listItem">
                    <p>Venenatis lectus magna fringilla urna</p>
                  </div>
                  <div className="listItem">
                    <p>Venenatis lectus magna fringilla urna</p>
                  </div>
                </div>
              </Slider>
            </div>
          </Modal>
        </div>
      </div>
      <div className={`${styles.bottleImg} backgroundImage`} />
    </div>
  );
};

export default ThirdPage;
