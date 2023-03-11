import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { favoriteListSelect, isFavoriteListSelect } from 'selectors/favorite';
import {
  isMobileSelect,
  isReposListSelect,
  isSearchListSelect,
  isUsersListSelect,
} from 'selectors/search';

import { setFavoriteList } from 'store/FavoriteReduser/favoriteReducer';
import {
  getSearchedUsersList,
  setReposList,
  setSearchList,
  setUsersList,
} from 'store/SearchReducer/actions/actions';

import { defaultSearchUsersList } from 'constants/searchConstants';

import styles from './styles.module.css';

export const FavoriteButton: FC = () => {
  const dispatch = useDispatch();

  const isFavoriteList = useSelector(isFavoriteListSelect);
  const favoriteList = useSelector(favoriteListSelect);
  const searchListFlag = useSelector(isSearchListSelect);
  const isMobile = useSelector(isMobileSelect);
  const isUsersList = useSelector(isUsersListSelect);
  const isReposList = useSelector(isReposListSelect);

  const showFavoriteListHandler = () => {
    if (isFavoriteList) {
      dispatch(setFavoriteList(false));
    } else {
      dispatch(setFavoriteList(true));
      if (searchListFlag) {
        dispatch(setSearchList(false));
      }

      if (isMobile && (isUsersList || isReposList)) {
        dispatch(setUsersList(false));
        dispatch(setReposList(false));
      }
    }

    if (isMobile) {
      dispatch(getSearchedUsersList(defaultSearchUsersList));
    }
  };

  if (!favoriteList.length) return null;

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
};
