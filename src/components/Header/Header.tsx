import React from 'react';
import { useSelector } from 'react-redux';

import { FavoriteButton } from '../../ui/FavoriteButton';
import { SearchHistoryButton } from '../../ui/SearchHistoryButton';

import { FavoriteUser } from '$store/FavoriteReduser/types';
import { AppStateType } from '$store/RootReducer';
import { ISearhHistoryItem } from '$store/SearchReducer/types';

import styles from './styles.module.css';

export const Header: React.FC = () => {
  const searchHistory = useSelector<AppStateType, ISearhHistoryItem[]>(
    (store) => store.search.searchHistory,
  );
  const favoriteList = useSelector<AppStateType, FavoriteUser[]>(
    (store) => store.favorite.favoriteList,
  );

  return (
    <header className={styles.rootHeader}>
      <h1>Find github&apos;s user</h1>

      <div className={styles.buttonsWrapper}>
        {searchHistory.length ? <SearchHistoryButton /> : ''}
        {favoriteList.length ? <FavoriteButton /> : ''}
      </div>
    </header>
  );
};
