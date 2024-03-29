import React from 'react';

import { FavoriteButton } from 'ui/FavoriteButton';
import { SearchHistoryButton } from 'ui/SearchHistoryButton';

import styles from './styles.module.css';

export const Header = () => {
  return (
    <header className={styles.rootHeader}>
      <h1>Find github&apos;s user</h1>

      <div className={styles.buttonsWrapper}>
        <SearchHistoryButton />
        <FavoriteButton />
      </div>
    </header>
  );
};
