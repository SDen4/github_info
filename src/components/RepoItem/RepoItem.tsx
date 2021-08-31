import React from 'react';

import { IRepoItemInt } from './types';

import styles from './RepoItem.module.css';

const RepoItem: React.FC<IRepoItemInt> = ({ repoItem }) => {
  // eslint-disable-next-line no-console
  console.log(repoItem);
  return <div className={styles.repoItemWrapper}>Repo Item</div>;
};

export default RepoItem;
