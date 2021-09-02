import React from 'react';

import { IFavoriteButton } from './types';

import styles from './FavoriteButton.module.css';

const FavoriteButton: React.FC<IFavoriteButton> = ({ starNum }) => {
  return (
    <button type="button" className={styles.button}>
      &#9733;
      <span>{starNum}</span>
    </button>
  );
};

export default FavoriteButton;
