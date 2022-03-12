import React from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import { favoriteListFlag } from '../../store/FavoriteReduser/actions';
import { searchHistoryListFlag } from '../../store/SearchReducer/actions';

import { IFavoriteButton } from './types';

import styles from './FavoriteButton.module.css';

const FavoriteButton: React.FC<IFavoriteButton> = ({
  starNum,
  favoriteListStatus,
}) => {
  const dispatch = useDispatch();

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
      className={clsx(
        favoriteListStatus && styles.button_active,
        styles.button,
      )}
      onClick={showFavoriteListHandler}
    >
      <span className={styles.star}>&#9733;</span>
      <span>{starNum}</span>
    </button>
  );
};

export default FavoriteButton;
