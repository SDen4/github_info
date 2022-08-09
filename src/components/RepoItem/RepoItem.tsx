import React, { memo } from 'react';
import clsx from 'clsx';

import { IRepoItem } from '../../store/SearchReducer/types';

import { dateFormatter } from '../../utils/dateFormatter';

import styles from './RepoItem.module.css';

export interface IProps {
  repoItem: IRepoItem;
}

const RepoItem: React.FC<IProps> = ({ repoItem }) => {
  return (
    <div className={styles.repoItemWrapper}>
      <div className={styles.repoItemUnit}>
        <a
          href={repoItem.html_url}
          className={styles.repoItemLink}
          target="_blank"
          rel="noreferrer"
        >
          {repoItem.name}
        </a>

        <span>{repoItem.description}</span>
      </div>

      <div className={clsx(styles.repoItemUnit, styles.repoItemUnitDates)}>
        {Boolean(repoItem?.forks) && (
          <div className={clsx(styles.repoSubUnit, styles.repoSubUnitRow)}>
            <span>Forks: </span>
            <span> </span>
            <span>{repoItem.forks}</span>
          </div>
        )}

        {Boolean(repoItem?.watchers) && (
          <div className={clsx(styles.repoSubUnit, styles.repoSubUnitRow)}>
            <span>Watchers: </span>
            <span> </span>
            <span>{repoItem.watchers}</span>
          </div>
        )}

        <div className={styles.repoSubUnit}>
          <span>Create at:</span>
          <span>{dateFormatter(new Date(repoItem.created_at))}</span>
        </div>

        <div className={styles.repoSubUnit}>
          <span>Update at:</span>
          <span>{dateFormatter(new Date(repoItem.updated_at))}</span>
        </div>

        <div className={styles.repoSubUnit}>
          {repoItem.language && (
            <>
              <span>Language: </span>
              <span>{repoItem.language}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(RepoItem);
