import React from 'react';

import { IError } from './types';

import styles from './Error.module.css';

const Error: React.FC<IError> = ({ userName }): JSX.Element => {
  return (
    <div className={styles.error_wrapper}>
      <h2>
        User
        <span className={styles.error_user_info}> {userName} </span>
        is not found...
      </h2>
    </div>
  );
};

export default Error;
