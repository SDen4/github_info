import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { Flex } from 'ui/Flex';

import { setMobileStart } from 'store/SearchReducer/actions/actions';

import styles from './styles.module.css';

export const StartMobile: React.FC<{ appHeight: number }> = memo(
  ({ appHeight }): JSX.Element => {
    const dispatch = useDispatch();

    const onBtnClickHandler = () => {
      document.body.requestFullscreen();

      const timer = window.setTimeout(() => {
        dispatch(setMobileStart(false));
        window.clearTimeout(timer);
      }, 50);
    };

    return (
      <Flex className={styles.startMobileWrap} style={{ minHeight: appHeight }}>
        <div className={styles.button__wrapper}>
          <button
            type="button"
            className={styles.button}
            onClick={onBtnClickHandler}
          >
            Go!
          </button>
        </div>
      </Flex>
    );
  },
);
