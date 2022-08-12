import React, { memo } from 'react';

import { Flex } from '../../ui/Flex';

import styles from './Error.module.css';

interface IProps {
  userName: string;
}

const Error: React.FC<IProps> = ({ userName }): JSX.Element => {
  return (
    <Flex className={styles.errorWrapper}>
      <h2>
        User
        <span className={styles.errorUserInfo}> {userName} </span>
        is not found...
      </h2>
    </Flex>
  );
};

export default memo(Error);
