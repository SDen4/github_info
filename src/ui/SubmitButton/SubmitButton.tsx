import React from 'react';
import clsx from 'clsx';

import { IButton } from './types';

import './styles.css';

const SubmitButton: React.FC<IButton> = ({ children, disabled }) => {
  return (
    <button
      className={clsx(disabled && 'button_unactive', 'button')}
      type="submit"
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
