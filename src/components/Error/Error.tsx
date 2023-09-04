import React from 'react';

import { Flex } from 'ui/Flex';

import styles from './styles.module.css';

const Error = () => {
  return (
    <Flex className={styles.errorWrapper}>
      <h2>User is not found...</h2>
    </Flex>
  );
};

export default Error;
