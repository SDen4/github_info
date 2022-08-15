import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { favoriteListFlag } from '../../store/FavoriteReduser/actions';
import { searchHistoryListFlag } from '../../store/SearchReducer/actions';

import { AppStateType } from '../../store/RootReducer';

import styles from './styles.module.css';

export const FavoriteButton: React.FC = memo(() => {
  const dispatch = useDispatch();

  const favoriteListStatus = useSelector<AppStateType, boolean>(
    (store) => store.favorite.favoriteListFlag,
  );
  const starNum = useSelector<AppStateType, number>(
    (store) => store.favorite.favoriteList.length,
  );
  const searchListFlag = useSelector<AppStateType, boolean>(
    (store) => store.search.searchHistoryListFlag,
  );

  const showFavoriteListHandler = () => {
    if (favoriteListStatus) {
      dispatch(favoriteListFlag(false));
    } else {
      dispatch(favoriteListFlag(true));
      if (searchListFlag) {
        dispatch(searchHistoryListFlag(false));
      }
    }
  };

  return (
    <button
      type="button"
      className={clsx(favoriteListStatus && styles.buttonActive, styles.button)}
      onClick={showFavoriteListHandler}
    >
      <span className={styles.star}>&#9733;</span>
      <span>{starNum}</span>
    </button>
  );
});
