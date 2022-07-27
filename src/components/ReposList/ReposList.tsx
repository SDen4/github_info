import React from 'react';
import { useSelector } from 'react-redux';

import RepoItem from '../RepoItem';

import { AppStateType } from '../../store/RootReducer';
import { IRepoItem } from '../../store/SearchReducer/types';

import styles from './ReposList.module.css';

const ReposList: React.FC = () => {
  const reposList = useSelector<AppStateType, IRepoItem[]>(
    (store) => store.search.reposList,
  );

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
