import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import RepoItem from '../RepoItem';

import { reposListSelect } from '../../store/SearchReducer/selectors';
import { IRepoItem } from '$store/SearchReducer/types';

import styles from './styles.module.css';

const ReposList: React.FC = () => {
  const reposList = useSelector(reposListSelect);

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

export default memo(ReposList);
