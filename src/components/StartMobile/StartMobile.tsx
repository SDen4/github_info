import React, { memo } from 'react';

import { IStartMobile } from './types';

import styles from './StartMobile.module.css';

const StartMobile: React.FC<IStartMobile> = ({
  appHeight,
  startMobileApp,
}): JSX.Element => {
  const onBtnClickHandler = () => {
    document.body.requestFullscreen();
    startMobileApp();
  };

  return (
    <div className={styles.startMobileWrap} style={{ minHeight: appHeight }}>
      <div className={styles.button__wrapper}>
        <button
          type="button"
          className={styles.button}
          onClick={onBtnClickHandler}
        >
          Let&#39;s go!
        </button>
        <div className={styles.flash} />
      </div>
    </div>
  );
};

export default memo(StartMobile);
