import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import CloseButton from '../../ui/CloseButton';

import {
  modalFlag,
  reposOpenedListFlag,
  userListOpenedFlag,
} from '../../store/SearchReducer/actions';
import { searchSaga } from '../../store/SearchReducer/actionsSagas';
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
  userListOpened,
  reposListOpened,
  isMobile,
  loading,
}) => {
  const dispatch = useDispatch();

  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [deletedElem, setDeletedElem] = useState<string>('');

  const closeBtnHandler = () => {
    dispatch(favoriteListFlag(false));
  };

  const searchHistoriListBtnHandler = (login: string) => {
    if (login === currentUserLogin) {
      if (userListOpened) {
        dispatch(userListOpenedFlag(false));
      }
      if (reposListOpened) {
        dispatch(reposOpenedListFlag(false));
      }
      return;
    }
    dispatch(searchSaga(login, searchList, isMobile, favoriteList));
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

  const openDeleteModal = (delElem: string) => {
    setDeleteModal(true);
    setDeletedElem(delElem);
  };

  const deleteBtnHandler = (delElem: string) => {
    const newFavoriteUsersList = favoriteList.filter(
      (el) => el.name !== delElem,
    );
    dispatch(fetchFavoriteList(newFavoriteUsersList));
    localStorage.setItem('favorite', JSON.stringify(newFavoriteUsersList));
    if (currentUserLogin === delElem) {
      dispatch(favoriteUserFlag(false));
    }
    setDeleteModal(false);
    setDeletedElem('');
  };

  const cancelDelete = () => {
    setDeleteModal(false);
    setDeletedElem('');
  };

  // const onDownloadHandler = () => {
  // let element = document.createElement('a');
  // const usersArr = favoriteList.map((el) => {
  //   console.log(el);
  //   return fileText(el, el.note);
  // });
  // const text = fileText(user, note);
  // element.setAttribute(
  //   'href',
  //   `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`,
  // );
  // element.setAttribute('download', `${user.login}.doc`);
  // element.style.display = 'none';
  // document.body.appendChild(element);
  // element.click();
  // document.body.removeChild(element);
  // };

  return (
    <div
      className={clsx(styles.shlWrapper, isMobile && loading && styles.hide)}
    >
      <div className={styles.listHeader}>
        <h3>Favorite list</h3>
        <CloseButton onClick={closeBtnHandler} />
      </div>
      {/* <button
          type="button"
          className={clsx(styles.button, styles.downloadBtn, styles.tooltip)}
          onClick={onDownloadHandler}
        >
          <span>&#10515;</span>
          <div className={clsx(styles.tooltipText, styles.tooltipTextDownload)}>
            Download list
          </div>
        </button> */}

      <ol className={styles.list}>
        {favoriteList.map((el) => (
          <li key={el.name}>
            <div className={styles.itemWrapper}>
              <button
                className={styles.shlButton}
                type="button"
                onClick={() => searchHistoriListBtnHandler(el.name)}
              >
                {el.name}
              </button>

              {el.note && <div className={styles.icon}>&#9998;</div>}

              <button
                type="button"
                className={clsx(styles.deleteListItemBtn, styles.tooltip)}
                onClick={() => openDeleteModal(el.name)}
              >
                <div className={styles.tooltipText}>Delete</div>
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

      {deleteModal && (
        <div className={styles.miniModal}>
          <span>
            Are you sure to delete user{' '}
            <span className={styles.deletedUserLogin}>{deletedElem}</span> from
            favorite list?
          </span>
          <div className={styles.btnsWrapper}>
            <button type="button" onClick={() => deleteBtnHandler(deletedElem)}>
              Delete
            </button>
            <button type="button" onClick={() => cancelDelete()}>
              Cansel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(FavoriteList);
