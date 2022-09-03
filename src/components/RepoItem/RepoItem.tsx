import React, { memo } from 'react';
import clsx from 'clsx';

import { Flex } from 'ui/Flex';

import { dateFormatter } from 'utils/dateFormatter';

import { IRepoItem } from 'model/search/types';

import styles from './styles.module.css';

export const RepoItem: React.FC<{ repoItem: IRepoItem }> = memo(
  ({ repoItem }) => {
    return (
      <Flex className={styles.repoItemWrapper}>
        <Flex className={styles.repoItemUnit}>
          <a
            href={repoItem.html_url}
            className={styles.repoItemLink}
            target="_blank"
            rel="noreferrer"
          >
            {repoItem.name}
          </a>

          <span>{repoItem.description}</span>
        </Flex>

        <Flex className={clsx(styles.repoItemUnit, styles.repoItemUnitDates)}>
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
        </Flex>
      </Flex>
    );
  },
);
