import React from 'react';
import { useDispatch } from 'react-redux';

import {
  // searchHistoryLIstFlag,
  searchSaga,
} from '../../store/SearchReducer/actions';

import { dateFormatter } from '../../utils/dateFormatter';

import { ISearchHistoryList } from './types';

import styles from './SearchHistoryList.module.css';

const SearchHistoryList: React.FC<ISearchHistoryList> = ({ searchList }) => {
  const dispatch = useDispatch();

  const searchHistoriListBtnHandler = (login: string) => {
    dispatch(searchSaga(login));
  };

  // const onClickCloseBtnHandler = () => {
  //   dispatch(searchHistoryLIstFlag());
  // };

  return (
    <div className={styles.shl_wrapper}>
      <div className={styles.shl_header}>
        <h3>Search history list</h3>{' '}
        {/* <div className={styles.card_close_btn_wrapper}>
          <button
            className={styles.card_close_btn}
            type="button"
            aria-label="Close"
            onClick={onClickCloseBtnHandler}
          />
        </div> */}
      </div>

      <ol>
        {searchList.map((el) => (
          <li key={el.login + Math.random}>
            <button
              className={styles.shl_button}
              type="button"
              onClick={() => searchHistoriListBtnHandler(el.login)}
            >
              {el.login}
            </button>
            <span> ({dateFormatter(el.dateOfSearch)})</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SearchHistoryList;
