import React from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import CloseButton from '../../ui/CloseButton';

import { dateFormatter } from '../../utils/dateFormatter';
import { periodCounter } from '../../utils/periodCounter';

import { cardOPenedFlag, fetchLogin } from '../../store/SearchReducer/actions';
import {
  fetchUsersListSaga,
  reposListSaga,
} from '../../store/SearchReducer/actionsSagas';

import {
  favoriteUserFlag,
  fetchFavoriteList,
  fetchFavoriteListAdd,
  noteFlag,
  setFavoriteBtnFlag,
} from '../../store/FavoriteReduser/actions';

import { CardType } from './types';

import { fileText } from './assets/fileText';

import styles from './Card.module.css';

const Card: React.FC<CardType> = ({
  user,
  favorites,
  favoriteUserStatus,
  noteUserStatus,
  note,
}) => {
  const dispatch = useDispatch();

  const onClickCloseBtnHandler = () => {
    dispatch(cardOPenedFlag(false));
    dispatch(
      fetchLogin('', '', '', '', 0, 0, new Date(), '', '', '', 0, '', ''),
    );
  };

  const onBtnClickHandler = (requestType: string) => {
    dispatch(fetchUsersListSaga(user.login, requestType));
  };

  const onReposClickHandler = () => {
    dispatch(reposListSaga(user.login));
  };

  const onClickAddBtnHandler = () => {
    if (favoriteUserStatus) {
      const newFavoriteUsersList = favorites.filter(
        (el) => el.name !== user.login,
      );
      dispatch(favoriteUserFlag(false));
      dispatch(fetchFavoriteList(newFavoriteUsersList));
      localStorage.setItem('favorite', JSON.stringify(newFavoriteUsersList));
    } else {
      dispatch(favoriteUserFlag(true));
      const newfavoriteUser = { name: user.login };
      dispatch(fetchFavoriteListAdd(newfavoriteUser));
      localStorage.setItem(
        'favorite',
        JSON.stringify([...favorites, newfavoriteUser]),
      );
      dispatch(setFavoriteBtnFlag(true));
    }
  };

  const onDownloadHandler = () => {
    let element = document.createElement('a');

    const text = fileText(user, note);

    element.setAttribute(
      'href',
      `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`,
    );
    element.setAttribute('download', `${user.login}.doc`);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };

  const addNoteHandler = () => {
    dispatch(noteFlag(true));
  };

  return (
    <div className={styles.card}>
      <aside className={styles.cardElement}>
        <div className={styles.cardPhotoWrapper}>
          <img src={user.avatarUrl} alt="User's avatar" />
        </div>
      </aside>

      <div className={styles.cardElement}>
        <header className={styles.cardSubElem}>
          {user.name ? (
            <a
              href={`https://github.com/${user.login}`}
              className={styles.cardLogin}
            >
              {user.name} &#40;{user.login}&#41;
            </a>
          ) : (
            <a
              href={`https://github.com/${user.login}`}
              className={styles.cardLogin}
            >
              {user.login}
            </a>
          )}
        </header>

        {user.company && (
          <div className={styles.cardSubElem}>
            <span>Company:&nbsp;</span>
            <div className={styles.cardUserInfo}>{user.company}</div>
          </div>
        )}

        {user.location && (
          <div className={styles.cardSubElem}>
            <span>Location:&nbsp;</span>
            <div className={styles.cardUserInfo}>{user.location}</div>
          </div>
        )}

        {user.email && (
          <div className={styles.cardSubElem}>
            <span>Email:&nbsp;</span>
            <a href={`mailto:${user.email}`} className={styles.cardUserInfo}>
              {user.email}
            </a>
          </div>
        )}

        {user.reposNum ? (
          <div className={styles.cardSubElem}>
            <span>Public repositories:&nbsp;</span>
            <button
              type="button"
              className={clsx(styles.cardUserInfo, styles.cardUserInfoBtn)}
              onClick={onReposClickHandler}
            >
              {user.reposNum}
            </button>
          </div>
        ) : (
          ''
        )}

        <div className={styles.cardFollowersWrapper}>
          <div className={styles.cardFollowersUnit}>
            <span>Followers:&nbsp;</span>
            <button
              type="button"
              className={clsx(styles.cardUserInfo, styles.cardUserInfoBtn)}
              onClick={() => onBtnClickHandler('followers')}
            >
              {user.followersNum}
            </button>
          </div>

          <div className={styles.cardFollowersUnit}>
            <span>Following:&nbsp;</span>
            <button
              type="button"
              className={clsx(styles.cardUserInfo, styles.cardUserInfoBtn)}
              onClick={() => onBtnClickHandler('following')}
            >
              {user.followingNum}
            </button>
          </div>
        </div>

        <div className={clsx(styles.cardSubElem, styles.cardSubElemCreate)}>
          <span>Created&nbsp;at:&nbsp;</span>
          <div className={styles.cardUserInfoWrapper}>
            <div className={styles.cardUserInfo}>
              {dateFormatter(user.dataCreated)}
            </div>
            <div className={styles.cardUserInfo}>
              ({periodCounter(user.dataCreated)})
            </div>
          </div>
        </div>

        {user.lastActivityDate && (
          <div className={styles.cardSubElem}>
            <span>Last&nbsp;activity&nbsp;at:&nbsp;</span>
            <div className={styles.cardUserInfo}>
              {dateFormatter(new Date(user.lastActivityDate))}
            </div>
          </div>
        )}
      </div>

      <div className={styles.closeBtnWrapper}>
        <button
          type="button"
          className={clsx(
            noteUserStatus && styles.buttonActive,
            styles.button,
            styles.addNoteBtn,
            styles.tooltip,
          )}
          onClick={addNoteHandler}
        >
          <span>&#9998;</span>
          <div className={styles.tooltipText}>
            {noteUserStatus ? 'Show note' : 'Add note'}
          </div>
        </button>

        <button
          type="button"
          className={clsx(styles.button, styles.downloadBtn, styles.tooltip)}
          onClick={onDownloadHandler}
        >
          <span>&#10515;</span>
          <div className={styles.tooltipText}>Download .doc file</div>
        </button>

        <button
          type="button"
          className={clsx(styles.button, styles.tooltip)}
          onClick={onClickAddBtnHandler}
        >
          <span
            className={clsx(
              favoriteUserStatus && styles.starActive,
              styles.star,
            )}
          >
            &#9733;
          </span>
          <div className={styles.tooltipText}>
            {favoriteUserStatus ? 'Remove from favorites' : 'Add to favorites'}
          </div>
        </button>

        <CloseButton onClick={onClickCloseBtnHandler} />
      </div>
    </div>
  );
};

export default Card;
