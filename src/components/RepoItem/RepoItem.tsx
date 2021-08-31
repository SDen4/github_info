import React from 'react';

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

      <div className={styles.repoItemUnit}>
        <>
          <span>Create at:</span>
          <span>{dateFormatter(repoItem.created_at)}</span>
        </>
        <>
          <span>Update at:</span>
          <span>{dateFormatter(repoItem.updated_at)}</span>
        </>
      </div>

      <div className={styles.repoItemUnit}>
        <span>Language: </span>
        <span>{repoItem.language}</span>
      </div>
    </div>
  );
};

export default RepoItem;
