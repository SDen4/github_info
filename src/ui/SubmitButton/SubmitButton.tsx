import React, { memo } from 'react';
import clsx from 'clsx';

import styles from './SubmitButton.module.css';

export interface IProps {
  children?: React.ReactNode;
  disabled?: boolean;
}

const SubmitButton: React.FC<IProps> = ({ children, disabled }) => {
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
