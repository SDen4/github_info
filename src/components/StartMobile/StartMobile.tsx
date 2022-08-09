import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { searchIsMobileStart } from '../../store/SearchReducer/actions';

import styles from './StartMobile.module.css';

export interface IProps {
  appHeight: number;
}

const StartMobile: React.FC<IProps> = ({ appHeight }): JSX.Element => {
  const dispatch = useDispatch();

  const onBtnClickHandler = () => {
    document.body.requestFullscreen();

    const timer = window.setTimeout(() => {
      dispatch(searchIsMobileStart(false));
      window.clearTimeout(timer);
    }, 50);
  };

  return (
    <div className={styles.startMobileWrap} style={{ minHeight: appHeight }}>
      <div className={styles.button__wrapper}>
        <button
          type="button"
          className={styles.button}
          onClick={onBtnClickHandler}
        >
          Go!
        </button>
      </div>
    </div>
  );
};

export default memo(StartMobile);
