import React from 'react';

import { IFavoriteList } from './types';

import styles from './FavoriteList.module.css';

const FavoriteList: React.FC<IFavoriteList> = ({ favoriteList }) => {
  // eslint-disable-next-line no-console
  console.log(favoriteList);
  return <div className={styles.listWrapper}>List</div>;
};

export default FavoriteList;
