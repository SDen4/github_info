import React from 'react';

import styles from './styles.module.css';

export const CloseButton = ({ onClick }: { onClick: () => void }) => {
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
