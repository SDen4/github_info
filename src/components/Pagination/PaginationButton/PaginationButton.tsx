import type { FC } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './styles.module.css';

export const PaginationButton: FC<{
  num: number | string | null;
  active: boolean;
  func: (page: number | string) => {
    readonly type: string;
    readonly payload: string | number;
  };
}> = ({ num, active, func }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    if (active || num === '...' || !num) {
      return;
    }

    dispatch(func(num));
  };

  return (
    <button
      type="button"
      className={`${styles.pgButton} ${active ? styles.pgButtonActive : ''} ${
        num === '...' ? styles.center : ''
      }`}
      onClick={onClick}
    >
      {num}
    </button>
  );
};
