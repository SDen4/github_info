import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { favoriteListFlag } from '../../store/FavoriteReduser/actions/actions';
import {
  favoriteListFlagSelect,
  favoriteListSelect,
} from '../../store/FavoriteReduser/selectors';
import { searchHistoryListFlag } from '../../store/SearchReducer/actions/actions';
import { searchHistoryListFlagSelect } from '../../store/SearchReducer/selectors';

import styles from './styles.module.css';

export const FavoriteButton: React.FC = memo(() => {
  const dispatch = useDispatch();

  const favoriteListStatus = useSelector(favoriteListFlagSelect);
  const favoriteList = useSelector(favoriteListSelect);
  const searchListFlag = useSelector(searchHistoryListFlagSelect);

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
      <span>{favoriteList.length}</span>
    </button>
  );
});
