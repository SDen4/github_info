import React from 'react';

import styles from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div className={styles.loader_wrapper}>
      <div className={styles.lds_default}>
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
    </div>
  );
};

export default Loader;
