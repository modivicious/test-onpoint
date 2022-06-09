import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

import { getElementDimensions } from "../../utils";

import styles from "./Slider.module.scss";

const Slider = ({
  children,
  activeIndex = 0,
  width = "100vw",
  height = "100vh",
  threshold = 100,
  changeActiveSlide = null,
  controls = false,
}) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const startPos = useRef(0);
  const currIndex = useRef(activeIndex);
  const sliderRef = useRef("slider");

  useLayoutEffect(() => {
    const currDimensions = getElementDimensions(sliderRef);
    setDimensions(currDimensions);
    setPositionByIndex(currDimensions.width);
  }, []);

  useEffect(() => {
    if (currIndex.current !== activeIndex) {
      currIndex.current = activeIndex;
      setPositionByIndex();
    }
  }, [activeIndex]);

  useEffect(() => {
    const resize = () => {
      const { width, height } = getElementDimensions(sliderRef);
      setDimensions({ width, height });
      setPositionByIndex(width);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const updateActiveSlide = (index = currIndex.current) => {
    currIndex.current = index;
    setPositionByIndex();
    changeActiveSlide && changeActiveSlide(currIndex.current);
  };

  const setPositionByIndex = (w = dimensions.width) => {
    setSliderPosition(currIndex.current * -w);
  };

  const setSliderPosition = (positionX) => {
    sliderRef.current.style.transform = `translateX(${positionX}px)`;
  };

  const goToNextSlide = () => {
    if (currIndex.current < children.length - 1)
      updateActiveSlide(currIndex.current + 1);
  };

  const goToPrevSlide = () => {
    if (currIndex.current > 0) updateActiveSlide(currIndex.current - 1);
  };

  const touchStart = (index) => {
    return (e) => {
      currIndex.current = index;
      startPos.current = e.touches[0].clientX;
    };
  };

  const touchEnd = (e) => {
    const movedBy = e.changedTouches[0].clientX - startPos.current;

    if (movedBy < -threshold) goToNextSlide();
    else if (movedBy > threshold) goToPrevSlide();
  };

  return (
    <div
      className={styles.sliderWrapper}
      style={{ width: width, height: height }}
    >
      <div className={styles.sliderList} ref={sliderRef}>
        {children.map((item, index) => (
          <div
            key={index - 1000}
            className={styles.sliderItem}
            onTouchStart={touchStart(index)}
            onTouchEnd={touchEnd}
          >
            {item}
          </div>
        ))}
      </div>

      {controls && (
        <div className={styles.controls}>
          <button
            className={`${styles.controlArrow} ${styles.controlArrowPrev} backgroundImage`}
            onClick={goToPrevSlide}
            type="button"
          />
          <ul className={styles.dots}>
            {children.map((item, index) => {
              return (
                <li
                  key={index - 1000}
                  className={
                    currIndex.current === index
                      ? `${styles.dotsItem} ${styles.active}`
                      : styles.dotsItem
                  }
                >
                  <button
                    className={styles.dot}
                    onClick={() => updateActiveSlide(index)}
                    type="button"
                  />
                </li>
              );
            })}
          </ul>
          <button
            className={`${styles.controlArrow} ${styles.controlArrowNext} backgroundImage`}
            onClick={goToNextSlide}
            type="button"
          />
        </div>
      )}
    </div>
  );
};

export default Slider;
