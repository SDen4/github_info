import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CloseButton } from '../../ui/CloseButton';
import { Flex } from '../../ui/Flex';

import {
  favoriteListFlag,
  favoriteUserFlag,
  fetchFavoriteList,
} from '../../store/FavoriteReduser/actions/actions';
import {
  fetchAllHistory,
  modalFlag,
  searchHistoryListFlag,
} from '../../store/SearchReducer/actions/actions';
import {
  modalTextSelect,
  modalTypeSelect,
} from '../../store/SearchReducer/selectors';

import styles from './styles.module.css';

const Modal: React.FC = () => {
  const dispatch = useDispatch();

  const modalText = useSelector(modalTextSelect);
  const modalType = useSelector(modalTypeSelect);

  const onBtnsHandler = (delStatus: boolean) => {
    if (delStatus) {
      if (modalType === 'search') {
        dispatch(searchHistoryListFlag(false));
        dispatch(fetchAllHistory([]));
        localStorage.removeItem('saves');
      } else if (modalType === 'favorite') {
        dispatch(favoriteListFlag(false));
        dispatch(favoriteUserFlag(false));
        dispatch(fetchFavoriteList([]));
        localStorage.removeItem('favorite');
      }
      dispatch(modalFlag(false, '', 'search'));
    } else {
      dispatch(modalFlag(false, '', 'search'));
    }
  };

  return (
    <Flex className={styles.modalWrapper}>
      <div className={styles.modal}>
        <span>{modalText}</span>
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
    </Flex>
  );
};

export default memo(Modal);
