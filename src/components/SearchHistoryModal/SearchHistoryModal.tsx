import React from 'react';
import { useDispatch } from 'react-redux';

import CloseButton from '../../ui/CloseButton';

import {
  fetchAllHistory,
  searchHistoryLIstFlag,
  searchHistoryModalFlag,
} from '../../store/SearchReducer/actions';

import { ISearchHistoryModal } from './types';

import styles from './SearchHistoryModal.module.css';

const SearchHistoryModal: React.FC<ISearchHistoryModal> = ({
  historyLength,
}) => {
  const dispatch = useDispatch();

  const onBtnsHandler = (delStatus: boolean) => {
    if (delStatus) {
      dispatch(searchHistoryLIstFlag(false));
      dispatch(fetchAllHistory([]));
      dispatch(searchHistoryModalFlag(false));
      localStorage.removeItem('saves');
    } else {
      dispatch(searchHistoryModalFlag(false));
    }
  };
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <span>
          Are you sure to delete all ({historyLength}{' '}
          {historyLength > 1 ? 'items' : 'item'}) search history?
        </span>
        <div className={styles.btnsWrapper}>
          <button type="button" onClick={() => onBtnsHandler(true)}>
            Delete
          </button>
          <button type="button" onClick={() => onBtnsHandler(false)}>
            Cansel
          </button>
        </div>
        <div className={styles.closeBtnWrapper}>
          <CloseButton onClick={() => onBtnsHandler(false)} />
        </div>
      </div>
    </div>
  );
};

export default SearchHistoryModal;
