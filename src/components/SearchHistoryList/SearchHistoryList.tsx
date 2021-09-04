import React from 'react';
import { useDispatch } from 'react-redux';

import {
  searchHistoryLIstFlag,
  searchHistoryModalFlag,
  searchSaga,
} from '../../store/SearchReducer/actions';

import CloseButton from '../../ui/CloseButton';

import { dateFormatter } from '../../utils/dateFormatter';

import { ISearchHistoryList } from './types';

import styles from './SearchHistoryList.module.css';

const SearchHistoryList: React.FC<ISearchHistoryList> = ({ searchList }) => {
  const dispatch = useDispatch();

  const searchHistoriListBtnHandler = (login: string) => {
    dispatch(searchSaga(login, searchList));
  };

  const closeBtnHandler = () => {
    dispatch(searchHistoryLIstFlag());
  };

  const clearBtnHandler = () => {
    dispatch(searchHistoryModalFlag(true));
  };

  return (
    <div className={styles.shl_wrapper}>
      <h3>Search history list</h3>
      <div className={styles.closeBtnWrapper}>
        <CloseButton onClick={closeBtnHandler} />
      </div>

      <ol>
        {searchList.map((el, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${el.login} + ${i}`}>
            <button
              className={styles.shl_button}
              type="button"
              onClick={() => searchHistoriListBtnHandler(el.login)}
            >
              {el.login}
            </button>
            <span> ({dateFormatter(new Date(el.dateOfSearch))})</span>
          </li>
        ))}
      </ol>

      <button
        className={styles.clearButton}
        type="button"
        onClick={clearBtnHandler}
      >
        Delete history
      </button>
    </div>
  );
};

export default SearchHistoryList;
