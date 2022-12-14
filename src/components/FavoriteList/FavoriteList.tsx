import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { CloseButton } from 'ui/CloseButton';
import { Flex } from 'ui/Flex';

import { favoriteListSelect } from 'selectors/favorite';
import {
  isLoadingSelect,
  isMobileSelect,
  isReposListSelect,
  isUsersListSelect,
  searchListSelect,
  userSelect,
} from 'selectors/search';

import {
  fetchFavoriteList,
  setFavoriteList,
  setFavoriteUser,
} from 'store/FavoriteReduser/favoriteReducer';
import {
  setModal,
  setReposList,
  setUsersList,
} from 'store/SearchReducer/actions/actions';
import { getGithubUserSaga } from 'store/SearchReducer/actions/actionsSagas';

import styles from './styles.module.css';

const FavoriteList: React.FC = () => {
  const dispatch = useDispatch();

  const favoriteList = useSelector(favoriteListSelect);
  const searchList = useSelector(searchListSelect);
  const user = useSelector(userSelect);
  const isUsersList = useSelector(isUsersListSelect);
  const isReposList = useSelector(isReposListSelect);
  const isMobile = useSelector(isMobileSelect);
  const isLoading = useSelector(isLoadingSelect);

  const [deleteModal, setDeleteModal] = useState(false);
  const [deletedElem, setDeletedElem] = useState('');

  const closeBtnHandler = () => {
    dispatch(setFavoriteList(false));
  };

  const searchHistoriListBtnHandler = (login: string) => {
    if (login === user.login) {
      if (isUsersList) {
        dispatch(setUsersList(false));
      }
      if (isReposList) {
        dispatch(setReposList(false));
      }
      return;
    }
    dispatch(getGithubUserSaga(login, searchList, favoriteList));
  };

  const clearBtnHandler = () => {
    dispatch(
      setModal({
        isModal: true,
        modalText: `Are you sure to delete ${
          favoriteList.length > 1 ? 'all' : ''
        } your ${
          favoriteList.length > 1 ? `(${favoriteList.length})` : ''
        } favorite ${favoriteList.length > 1 ? 'users' : 'user'}?`,
        modalType: 'favorite',
      }),
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
    if (user.login === delElem) {
      dispatch(setFavoriteUser(false));
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
    <Flex
      className={clsx(styles.shlWrapper, isMobile && isLoading && styles.hide)}
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
        <Flex className={styles.miniModal}>
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
        </Flex>
      )}
    </Flex>
  );
};

export default memo(FavoriteList);
