import React from 'react';
import { useDispatch } from 'react-redux';

import CloseButton from '../../ui/CloseButton';

import { modalFlag, searchSaga } from '../../store/SearchReducer/actions';
import {
  favoriteListFlag,
  favoriteUserFlag,
  fetchFavoriteList,
} from '../../store/FavoriteReduser/actions';

import { IFavoriteList } from './types';

import styles from './FavoriteList.module.css';

const FavoriteList: React.FC<IFavoriteList> = ({
  favoriteList,
  searchList,
  currentUserLogin,
}) => {
  const dispatch = useDispatch();

  const closeBtnHandler = () => {
    dispatch(favoriteListFlag(false));
  };

  const searchHistoriListBtnHandler = (login: string) => {
    if (login === currentUserLogin) {
      return;
    }
    dispatch(searchSaga(login, searchList, favoriteList));
  };

  const clearBtnHandler = () => {
    dispatch(
      modalFlag(
        true,
        `Are you sure to delete ${favoriteList.length > 1 ? 'all' : ''} your ${
          favoriteList.length > 1 ? `(${favoriteList.length})` : ''
        } favorite ${favoriteList.length > 1 ? 'users' : 'user'}?`,
        'favorite',
      ),
    );
  };

  const deleteBtnHandler = (delElem: string) => {
    const newFavoriteUsersList = favoriteList.filter((el) => el !== delElem);
    dispatch(fetchFavoriteList(newFavoriteUsersList));
    localStorage.setItem('favorite', JSON.stringify(newFavoriteUsersList));
    if (currentUserLogin === delElem) {
      dispatch(favoriteUserFlag(false));
    }
  };

  return (
    <div className={styles.shl_wrapper}>
      <h3>Favorite list</h3>
      <div className={styles.closeBtnWrapper}>
        <CloseButton onClick={closeBtnHandler} />
      </div>

      <ol>
        {favoriteList.map((el) => (
          <li key={el}>
            <div className={styles.itemWrapper}>
              <button
                className={styles.shl_button}
                type="button"
                onClick={() => searchHistoriListBtnHandler(el)}
              >
                {el}
              </button>
              <button
                type="button"
                className={styles.deleteListItemBtn}
                onClick={() => deleteBtnHandler(el)}
              >
                {' '}
              </button>
            </div>
          </li>
        ))}
      </ol>

      <button
        className={styles.clearButton}
        type="button"
        onClick={clearBtnHandler}
      >
        Delete all favorite users
      </button>
    </div>
  );
};

export default FavoriteList;
