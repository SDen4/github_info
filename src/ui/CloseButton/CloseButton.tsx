import React from 'react';

import { ICloseButton } from './types';

import styles from './CloseButton.module.css';

const CloseButton: React.FC<ICloseButton> = ({ onClick }) => {
  return (
    <button
      className={styles.close_btn}
      type="button"
      aria-label="Close"
      onClick={onClick}
    />
  );
};

export default CloseButton;
