import React from 'react';
import { useDispatch } from 'react-redux';

import { searchSaga } from '../../store/SearchReducer/actions';

import { dateFormatter } from '../../utils/dateFormatter';

import { ISearchHistoryList } from './types';

import styles from './SearchHistoryList.module.css';

const SearchHistoryList: React.FC<ISearchHistoryList> = ({ searchList }) => {
  const dispatch = useDispatch();

  const searchHistoriListBtnHandler = (login: string) => {
    dispatch(searchSaga(login));
  };

  return (
    <div className={styles.shl_wrapper}>
      <h3>Search history list</h3>
      <ol>
        {searchList.map((el) => (
          <li key={el.login}>
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
