import React from 'react';
import { useDispatch } from 'react-redux';

import { favoriteListFlag } from '../../store/FavoriteReduser/actions';

import { IFavoriteButton } from './types';

import styles from './FavoriteButton.module.css';

const FavoriteButton: React.FC<IFavoriteButton> = ({ starNum }) => {
  const dispatch = useDispatch();
  const showFavoriteListHandler = () => {
    dispatch(favoriteListFlag());
  };

  return (
    <button
      type="button"
      className={styles.button}
      onClick={showFavoriteListHandler}
    >
      <span className={styles.star}>&#9733;</span>
      <span>{starNum}</span>
    </button>
  );
};

export default FavoriteButton;
