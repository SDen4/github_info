import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { favoriteListFlag } from '../../store/FavoriteReduser/actions';
import { searchHistoryListFlag } from '../../store/SearchReducer/actions';

import styles from './FavoriteButton.module.css';
import { AppStateType } from '../../store/RootReducer';

const FavoriteButton: React.FC = () => {
  const dispatch = useDispatch();

  const favoriteListStatus = useSelector<AppStateType, boolean>(
    (store) => store.favorite.favoriteListFlag,
  );
  const starNum = useSelector<AppStateType, number>(
    (store) => store.favorite.favoriteList.length,
  );

  const showFavoriteListHandler = () => {
    if (favoriteListStatus) {
      dispatch(favoriteListFlag(false));
    } else {
      dispatch(favoriteListFlag(true));
      dispatch(searchHistoryListFlag(false));
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
};

export default FavoriteButton;
