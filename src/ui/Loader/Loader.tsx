import React from 'react';

import { Flex } from '../Flex';

import styles from './styles.module.css';

const Loader: React.FC = () => {
  return (
    <Flex className={styles.loaderWrapper}>
      <div className={styles.ldsDefault}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </Flex>
  );
};

export default Loader;
