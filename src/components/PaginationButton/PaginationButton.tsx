import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import { paginationSaga } from 'store/SearchReducer/actions/actionsSagas';

import styles from './styles.module.css';

export const PaginationButton: FC<{ num: number; active: boolean }> = ({
  num,
  active,
}) => {
  const dispatch = useDispatch();

  const onClick = () => {
    if (active) {
      return;
    }

    dispatch(paginationSaga(num));
  };

  return (
    <button
      type="button"
      className={`${styles.pgButton} ${active ? styles.pgButtonActive : ''}`}
      onClick={onClick}
    >
      {num}
    </button>
  );
};
