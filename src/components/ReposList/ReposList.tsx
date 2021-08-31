import React from 'react';

import { IReposList } from './types';
import { IRepoItem } from '../../store/SearchReducer/types';

import styles from './ReposList.module.css';
import RepoItem from '../RepoItem';

const ReposList: React.FC<IReposList> = ({ reposList }) => {
  return (
    <ul className={styles.reposWrapper}>
      {reposList.map((repo: IRepoItem) => (
        <li key={repo.name} className={styles.reposItem}>
          <RepoItem repoItem={repo} />
        </li>
      ))}
    </ul>
  );
};

export default ReposList;
