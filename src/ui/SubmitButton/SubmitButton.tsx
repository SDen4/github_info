import React, { memo } from 'react';
import clsx from 'clsx';

import { IButton } from './types';

import styles from './SubmitButton.module.css';

const SubmitButton: React.FC<IButton> = ({ children, disabled }) => {
  return (
    <button
      className={clsx(disabled && styles.buttonUnactive, styles.button)}
      type="submit"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default memo(SubmitButton);
