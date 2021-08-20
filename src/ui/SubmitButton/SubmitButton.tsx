import React from 'react';

import { IButton } from './types';

import './styles.css';

const SubmitButton: React.FC<IButton> = ({ children }) => {
  return (
    <button className="button" type="submit">
      {children}
    </button>
  );
};

export default SubmitButton;
