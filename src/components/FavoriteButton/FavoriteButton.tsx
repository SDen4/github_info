import React from 'react';

import styles from './FavoriteButton.module.css';

const FavoriteButton: React.FC = () => {
  return (
    <button type="button" className={styles.button}>
      &#9733;
    </button>
  );
};

export default FavoriteButton;
