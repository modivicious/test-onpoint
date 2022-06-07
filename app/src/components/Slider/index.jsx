import React, { useState, useRef, useEffect, useLayoutEffect } from "react";

import { getElementDimensions } from "../../utils";

import styles from "./Slider.module.scss";

const Slider = ({
  children,
  activeIndex = null,
  width = "100vw",
  height = "100vh",
  threshold = 100,
  changeActiveSlide = null,
}) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const startPos = useRef(0);
  const currIndex = useRef(activeIndex || 0);
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

  const setPositionByIndex = (w = dimensions.width) => {
    setSliderPosition(currIndex.current * -w);
    changeActiveSlide && changeActiveSlide(currIndex.current);
  };

  const setSliderPosition = (translate) => {
    sliderRef.current.style.transform = `translateX(${translate}px)`;
  };

  const touchStart = (index) => {
    return (e) => {
      currIndex.current = index;
      startPos.current = e.touches[0].clientX;
    };
  };

  const touchEnd = (e) => {
    const movedBy = e.changedTouches[0].clientX - startPos.current;

    if (movedBy < -threshold && currIndex.current < children.length - 1)
      currIndex.current += 1;
    else if (movedBy > threshold && currIndex.current > 0)
      currIndex.current -= 1;

    setPositionByIndex();
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
    </div>
  );
};

export default Slider;
