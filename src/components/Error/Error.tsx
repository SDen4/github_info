import React from 'react';
import './styles.css';

const Error = (userName: string): JSX.Element => {
  return (
    <div className="error_wrapper">
      <h2>User {userName} is not found</h2>
    </div>
  );
};

export default Error;
