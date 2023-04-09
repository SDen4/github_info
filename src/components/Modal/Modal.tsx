import type { FC } from 'react';
import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CloseButton } from 'ui/CloseButton';
import { Flex } from 'ui/Flex';

import { modalTextSelect, modalTypeSelect } from 'selectors/search';

import {
  fetchFavoriteList,
  setFavoriteList,
  setFavoriteUser,
} from 'store/FavoriteReduser/favoriteReducer';
import {
  fetchSearchList,
  setModal,
  setSearchList,
} from 'store/SearchReducer/searchReducer';

import styles from './styles.module.css';

const Modal: FC = () => {
  const dispatch = useDispatch();

  const modalText = useSelector(modalTextSelect);
  const modalType = useSelector(modalTypeSelect);

  const onBtnsHandler = (delStatus: boolean) => {
    if (delStatus) {
      if (modalType === 'search') {
        dispatch(setSearchList(false));
        dispatch(fetchSearchList([]));
        localStorage.removeItem('saves');
      } else if (modalType === 'favorite') {
        dispatch(setFavoriteList(false));
        dispatch(setFavoriteUser(false));
        dispatch(fetchFavoriteList([]));
        localStorage.removeItem('favorite');
      }
      dispatch(
        setModal({ isModal: false, modalText: '', modalType: 'search' }),
      );
    } else {
      dispatch(
        setModal({ isModal: false, modalText: '', modalType: 'search' }),
      );
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
