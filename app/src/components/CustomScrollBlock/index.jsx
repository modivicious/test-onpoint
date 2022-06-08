import React, { useRef, useLayoutEffect } from "react";

import styles from "./CustomScrollBlock.module.scss";

const CustomScrollBlock = ({ children, height }) => {
  const startMovePos = useRef(0);
  const newTop = useRef(0);
  const thumbBottomEdge = useRef(0);
  const thumbRef = useRef("thumb");
  const contentRef = useRef("content");

  useLayoutEffect(() => {
    thumbBottomEdge.current =
      thumbRef.current.parentNode.offsetHeight - thumbRef.current.offsetHeight;
  }, []);

  const setContentScrollTo = (posY) => {
    contentRef.current.scrollTo(0, posY);
  };

  const setThumbPosition = (posY) => {
    thumbRef.current.style.top = `${posY}px`;
  };

  const setContentPosition = () => {
    const thumbScrollRatio = newTop.current / thumbBottomEdge.current;
    const maxContentScroll =
      contentRef.current.scrollHeight -
      contentRef.current.parentNode.offsetHeight;

    setContentScrollTo(thumbScrollRatio * maxContentScroll);
  };

  const touchStart = (e) => {
    startMovePos.current = e.touches[0].clientY;
  };

  const touchMove = (e) => {
    const currMovePos = e.touches[0].clientY;

    newTop.current += currMovePos - startMovePos.current;

    if (newTop.current < 0) newTop.current = 0;
    else if (newTop.current > thumbBottomEdge.current)
      newTop.current = thumbBottomEdge.current;

    setThumbPosition(newTop.current);
    setContentPosition();

    startMovePos.current = currMovePos;
  };

  return (
    <div className={styles.wrapper} style={{ height }}>
      <div className={styles.scrollBar}>
        <div className={styles.scrollTrack} />
        <div
          className={styles.scrollThumb}
          ref={thumbRef}
          onTouchStart={touchStart}
          onTouchMove={touchMove}
        />
      </div>
      <div className={styles.contentBox}>
        <div className={styles.viewport}>
          <div
            className={styles.content}
            style={{ height: `${children.offsetHeight}px` }}
            ref={contentRef}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomScrollBlock;
