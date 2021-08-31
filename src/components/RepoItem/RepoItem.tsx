import React from 'react';
import clsx from 'clsx';

import { IRepoItemInt } from './types';

import styles from './RepoItem.module.css';
import { dateFormatter } from '../../utils/dateFormatter';

const RepoItem: React.FC<IRepoItemInt> = ({ repoItem }) => {
  return (
    <div className={styles.repoItemWrapper}>
      <div className={styles.repoItemUnit}>
        <a href={repoItem.html_url} className={styles.repoItemLink}>
          {repoItem.name}
        </a>

        <span>{repoItem.description}</span>
      </div>

      <div className={clsx(styles.repoItemUnit, styles.repoItemUnitDates)}>
        <div className={styles.repoSubUnit}>
          <span>Create at:</span>
          <span>{dateFormatter(new Date(repoItem.created_at))}</span>
        </div>

        <div className={styles.repoSubUnit}>
          <span>Update at:</span>
          <span>{dateFormatter(new Date(repoItem.updated_at))}</span>
        </div>

        <div className={styles.repoSubUnit}>
          <span>Language: </span>
          <span>{repoItem.language}</span>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
