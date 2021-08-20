import React from 'react';

import { IButton } from './types';

import './styles.css';

const Button: React.FC<IButton> = ({ children, onClick }) => {
  return (
    <button className="button" type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
