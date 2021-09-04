import React from 'react';
import { useDispatch } from 'react-redux';

import CloseButton from '../../ui/CloseButton';

import { modalFlag, searchSaga } from '../../store/SearchReducer/actions';
import { favoriteListFlag } from '../../store/FavoriteReduser/actions';

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
    dispatch(searchSaga(login, searchList));
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

  return (
    <div className={styles.shl_wrapper}>
      <h3>Favorite list</h3>
      <div className={styles.closeBtnWrapper}>
        <CloseButton onClick={closeBtnHandler} />
      </div>

      <ol>
        {favoriteList.map((el) => (
          <li key={el}>
            <button
              className={styles.shl_button}
              type="button"
              onClick={() => searchHistoriListBtnHandler(el)}
            >
              {el}
            </button>
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
