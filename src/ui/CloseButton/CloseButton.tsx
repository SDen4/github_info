import React from 'react';
import clsx from 'clsx';

import { ICloseButton } from './types';

import styles from './CloseButton.module.css';

const CloseButton: React.FC<ICloseButton> = ({ onClick }) => {
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
};

export default CloseButton;
