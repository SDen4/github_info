import type { FC } from 'react';
import React from 'react';

import { Flex } from '../Flex';

import styles from './styles.module.css';

export const Loader: FC = () => {
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
