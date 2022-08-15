import React, { memo } from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

export interface IProps {
  onClick: () => void;
}

export const CloseButton: React.FC<IProps> = memo(({ onClick }) => {
  return (
    <button
      className={clsx(styles.closeBtn, styles.tooltip)}
      type="button"
      aria-label="Close"
      onClick={onClick}
    >
      <div className={styles.tooltipText}>Close</div>
    </button>
  );
});
