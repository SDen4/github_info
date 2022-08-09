import React, { memo } from 'react';

import styles from './Error.module.css';

interface IProps {
  userName: string;
}

const Error: React.FC<IProps> = ({ userName }): JSX.Element => {
  return (
    <div className={styles.errorWrapper}>
      <h2>
        User
        <span className={styles.errorUserInfo}> {userName} </span>
        is not found...
      </h2>
    </div>
  );
};

export default memo(Error);
