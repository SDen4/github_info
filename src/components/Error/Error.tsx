import React from 'react';
import './styles.css';
import { IError } from './types';

const Error: React.FC<IError> = ({ userName }): JSX.Element => {
  return (
    <div className="error_wrapper">
      <h2>
        User
        <span className="error_user_info"> {userName} </span>
        is not found...
      </h2>
    </div>
  );
};

export default Error;
