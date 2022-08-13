import React, { memo } from 'react';
import clsx from 'clsx';

import styles from './SubmitButton.module.css';

interface IProps {
  children?: React.ReactNode;
  disabled?: boolean;
}

export const SubmitButton: React.FC<IProps> = memo(
  ({ children, disabled }): JSX.Element => {
    return (
      <button
        className={clsx(disabled && styles.buttonUnactive, styles.button)}
        type="submit"
        disabled={disabled}
      >
        {children}
      </button>
    );
  },
);
