import React, { FC } from 'react';

import styles from './styles.module.css';

export const PaginationButton: FC<{ num: number; active: boolean }> = ({
  num,
  active,
}) => {
  return (
    <button
      type="button"
      className={`${styles.pgButton} ${active ? styles.pgButtonActive : ''}`}
    >
      {num}
    </button>
  );
};
