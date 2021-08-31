import React from 'react';

import { IReposList } from './types';

import styles from './ReposList.module.css';

const ReposList: React.FC<IReposList> = ({ reposList }) => {
  // eslint-disable-next-line no-console
  console.log(reposList);
  return <div className={styles.reposWrapper}>Repos List</div>;
};

export default ReposList;
