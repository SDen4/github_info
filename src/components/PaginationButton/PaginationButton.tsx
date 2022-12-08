import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { paginationSaga } from 'store/SearchReducer/actions/actionsSagas';

import styles from './styles.module.css';

export const PaginationButton: FC<{
  num: number | string;
  active: boolean;
}> = ({ num, active }) => {
  const dispatch = useDispatch();

  const onClick = () => {
    if (active || num === '...') {
      return;
    }

    dispatch(paginationSaga(num));
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
