import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { Ul } from 'ui/Ul';
import { RepoItem } from 'components/RepoItem';

import { reposListSelect } from 'store/SearchReducer/selectors';

import { IRepoItem } from 'model/search/types';

import styles from './styles.module.css';

const ReposList: React.FC = () => {
  const reposList = useSelector(reposListSelect);

  return (
    <Ul>
      {reposList.map((repo: IRepoItem) => (
        <li key={repo.name} className={styles.reposItem}>
          <RepoItem repoItem={repo} />
        </li>
      ))}
    </Ul>
  );
};

export default memo(ReposList);
