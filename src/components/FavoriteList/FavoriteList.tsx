import React from 'react';

import { IFavoriteList } from './types';

import styles from './FavoriteList.module.css';
import CloseButton from '../../ui/CloseButton';
import { useDispatch } from 'react-redux';
import { favoriteListFlag } from '../../store/FavoriteReduser/actions';
import { searchSaga } from '../../store/SearchReducer/actions';

const FavoriteList: React.FC<IFavoriteList> = ({
  favoriteList,
  searchList,
}) => {
  const dispatch = useDispatch();

  const closeBtnHandler = () => {
    dispatch(favoriteListFlag());
  };

  const searchHistoriListBtnHandler = (login: string) => {
    dispatch(searchSaga(login, searchList));
  };

  return (
    <div className={styles.shl_wrapper}>
      <h3>Search history list</h3>
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

      <button className={styles.clearButton} type="button" onClick={() => null}>
        Delete all favorites users
      </button>
    </div>
  );
};

export default FavoriteList;
