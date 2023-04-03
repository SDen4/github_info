import type { FC } from 'react';
import React from 'react';

import styles from './styles.module.css';

export const CloseButton: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      className={styles.closeBtn}
      type="button"
      aria-label="Close"
      onClick={onClick}
    >
      <div className={styles.tooltipText}>Close</div>
    </button>
  );
};
