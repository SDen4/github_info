import React from 'react';
import { useDispatch } from 'react-redux';

import CloseButton from '../../ui/CloseButton';

import {
  fetchAllHistory,
  searchHistoryLIstFlag,
  modalFlag,
} from '../../store/SearchReducer/actions';

import { ISearchHistoryModal } from './types';

import styles from './Modal.module.css';
import {
  favoriteListFlag,
  fetchFavoriteList,
} from '../../store/FavoriteReduser/actions';

const Modal: React.FC<ISearchHistoryModal> = ({ textModal, type }) => {
  const dispatch = useDispatch();

  const onBtnsHandler = (delStatus: boolean) => {
    if (delStatus) {
      if (type === 'search') {
        dispatch(searchHistoryLIstFlag(false));
        dispatch(fetchAllHistory([]));
        localStorage.removeItem('saves');
      } else if (type === 'favorite') {
        dispatch(favoriteListFlag(false));
        dispatch(fetchFavoriteList([]));
        localStorage.removeItem('favorite');
      }
      dispatch(modalFlag(false, '', 'search'));
    } else {
      dispatch(modalFlag(false, '', 'search'));
    }
  };
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <span>
          {textModal}
          {/* Are you sure to delete all ({itemsLength}{' '}
          {itemsLength > 1 ? 'items' : 'item'}) search history? */}
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

export default Modal;
