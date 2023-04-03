import type { FC } from 'react';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { Ul } from 'ui/Ul';
import { Pagination } from 'components/Pagination';
import { RepoItem } from 'components/RepoItem';

import {
  isLoadingSelect,
  pageReposSelect,
  reposListSelect,
  userSelect,
} from 'selectors/search';

import { paginationReposSaga } from 'store/SearchReducer/actions/actionsSagas';

import type { IRepoItem } from 'model/search/types';

import { reposPerPage } from 'constants/searchConstants';

import styles from './styles.module.css';

const ReposList: FC = () => {
  const reposList = useSelector(reposListSelect);
  const pageRepos = useSelector(pageReposSelect);
  const user = useSelector(userSelect);
  const isLoading = useSelector(isLoadingSelect);

  return (
    <>
      <Ul className={isLoading ? styles.hide : ''}>
        {reposList.map((repo: IRepoItem) => (
          <li key={repo.name} className={styles.reposItem}>
            <RepoItem repoItem={repo} />
          </li>
        ))}
      </Ul>

      <Pagination
        itemsPerPage={reposPerPage}
        totalElements={user.reposNum as number}
        page={pageRepos}
        func={paginationReposSaga}
      />
    </>
  );
};

export default memo(ReposList);
