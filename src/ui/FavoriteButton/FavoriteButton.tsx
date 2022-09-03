import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { setFavoriteList } from 'store/FavoriteReduser/actions/actions';
import {
  favoriteListSelect,
  isFavoriteListSelect,
} from 'store/FavoriteReduser/selectors';
import { setSearchList } from 'store/SearchReducer/actions/actions';
import { isSearchListSelect } from 'store/SearchReducer/selectors';

import styles from './styles.module.css';

export const FavoriteButton: React.FC = memo(() => {
  const dispatch = useDispatch();

  const isFavoriteList = useSelector(isFavoriteListSelect);
  const favoriteList = useSelector(favoriteListSelect);
  const searchListFlag = useSelector(isSearchListSelect);

  const showFavoriteListHandler = () => {
    if (isFavoriteList) {
      dispatch(setFavoriteList(false));
    } else {
      dispatch(setFavoriteList(true));
      if (searchListFlag) {
        dispatch(setSearchList(false));
      }
    }
  };

  return (
    <button
      type="button"
      className={clsx(isFavoriteList && styles.buttonActive, styles.button)}
      onClick={showFavoriteListHandler}
    >
      <span className={styles.star}>&#9733;</span>
      <span>{favoriteList.length}</span>
    </button>
  );
});
