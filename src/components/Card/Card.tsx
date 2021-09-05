import React from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import CloseButton from '../../ui/CloseButton';

import { dateFormatter } from '../../utils/dateFormatter';
import { periodCounter } from '../../utils/periodCounter';

import {
  cardOPenedFlag,
  fetchLogin,
  fetchUsersListSaga,
  reposListSaga,
} from '../../store/SearchReducer/actions';

import {
  favoriteUserFlag,
  fetchFavoriteList,
  fetchFavoriteListAdd,
  setFavoriteBtnFlag,
} from '../../store/FavoriteReduser/actions';

import { CardType } from './types';

import styles from './Card.module.css';

const Card: React.FC<CardType> = ({ user, favorites, favoriteUserStatus }) => {
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
      const newFavoriteUsersList = favorites.filter((el) => el !== user.login);
      dispatch(favoriteUserFlag(false));
      dispatch(fetchFavoriteList(newFavoriteUsersList));
      localStorage.setItem('favorite', JSON.stringify(newFavoriteUsersList));
    } else {
      dispatch(favoriteUserFlag(true));
      dispatch(fetchFavoriteListAdd(user.login));
      localStorage.setItem(
        'favorite',
        JSON.stringify([...favorites, user.login]),
      );
      dispatch(setFavoriteBtnFlag(true));
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.card_element}>
        <div className={styles.card_photo_wrapper}>
          <img src={user.avatarUrl} alt="User's avatar" />
        </div>
      </div>

      <div className={styles.card_element}>
        <div className={styles.card_sub_element}>
          {user.name ? (
            <a
              href={`https://github.com/${user.login}`}
              className={styles.card_login}
            >
              {user.name} &#40;{user.login}&#41;
            </a>
          ) : (
            <a
              href={`https://github.com/${user.login}`}
              className={styles.card_login}
            >
              {user.login}
            </a>
          )}
        </div>

        {user.company && (
          <div className={styles.card_sub_element}>
            <span>Company:&nbsp;</span>
            <div className={styles.card_user_info}>{user.company}</div>
          </div>
        )}

        {user.location && (
          <div className={styles.card_sub_element}>
            <span>Location:&nbsp;</span>
            <div className={styles.card_user_info}>{user.location}</div>
          </div>
        )}

        {user.email && (
          <div className={styles.card_sub_element}>
            <span>Email:&nbsp;</span>
            <a href={`mailto:${user.email}`} className={styles.card_user_info}>
              {user.email}
            </a>
          </div>
        )}

        {user.reposNum ? (
          <div className={styles.card_sub_element}>
            <span>Public repositories:&nbsp;</span>
            <button
              type="button"
              className={clsx(styles.card_user_info, styles.card_user_info_btn)}
              onClick={onReposClickHandler}
            >
              {user.reposNum}
            </button>
          </div>
        ) : (
          ''
        )}

        <div className={styles.card_followers_wrapper}>
          <div className={styles.card_followers_unit}>
            <span>Followers:&nbsp;</span>
            <button
              type="button"
              className={clsx(styles.card_user_info, styles.card_user_info_btn)}
              onClick={() => onBtnClickHandler('followers')}
            >
              {user.followersNum}
            </button>
          </div>

          <div className={styles.card_followers_unit}>
            <span>Following:&nbsp;</span>
            <button
              type="button"
              className={clsx(styles.card_user_info, styles.card_user_info_btn)}
              onClick={() => onBtnClickHandler('following')}
            >
              {user.followingNum}
            </button>
          </div>
        </div>

        <div
          className={clsx(
            styles.card_sub_element,
            styles.card_sub_element_create,
          )}
        >
          <span>Created&nbsp;at:&nbsp;</span>
          <div className={styles.card_user_info_wrapper}>
            <div className={styles.card_user_info}>
              {dateFormatter(user.dataCreated)}
            </div>
            <div className={styles.card_user_info}>
              ({periodCounter(user.dataCreated)})
            </div>
          </div>
        </div>
      </div>

      <div className={styles.closeBtnWrapper}>
        <button
          type="button"
          className={styles.button}
          onClick={onClickAddBtnHandler}
        >
          <span
            className={clsx(
              favoriteUserStatus && styles.star_active,
              styles.star,
            )}
          >
            &#9733;
          </span>
        </button>
        <CloseButton onClick={onClickCloseBtnHandler} />
      </div>
    </div>
  );
};

export default Card;
