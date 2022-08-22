import React from 'react';
import { useSelector } from 'react-redux';

import { FavoriteButton } from '../../ui/FavoriteButton';
import { SearchHistoryButton } from '../../ui/SearchHistoryButton';

import { favoriteListSelect } from '../../store/FavoriteReduser/selectors';
import { searchListSelect } from '../../store/SearchReducer/selectors';

import styles from './styles.module.css';

export const Header: React.FC = () => {
  const searchList = useSelector(searchListSelect);
  const favoriteList = useSelector(favoriteListSelect);

  return (
    <header className={styles.rootHeader}>
      <h1>Find github&apos;s user</h1>

      <div className={styles.buttonsWrapper}>
        {searchList.length ? <SearchHistoryButton /> : ''}
        {favoriteList.length ? <FavoriteButton /> : ''}
      </div>
    </header>
  );
};
