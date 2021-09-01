import React from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import { dateFormatter } from '../../utils/dateFormatter';
import { periodCounter } from '../../utils/periodCounter';

import {
  cardOPenedFlag,
  fetchUsersListSaga,
  reposListSaga,
} from '../../store/SearchReducer/actions';

import { CardType } from './types';

import styles from './Card.module.css';
import CloseButton from '../../ui/CloseButton';

const Card: React.FC<CardType> = ({ user }) => {
  const dispatch = useDispatch();

  const onClickCloseBtnHandler = () => {
    dispatch(cardOPenedFlag(false));
  };

  const onBtnClickHandler = (requestType: string) => {
    dispatch(fetchUsersListSaga(user.login, requestType));
  };

  const onReposClickHandler = () => {
    dispatch(reposListSaga(user.login));
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
            <h2>
              {user.name} &#40;{user.login}&#41;
            </h2>
          ) : (
            <h2>{user.login}</h2>
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

      <CloseButton onClick={onClickCloseBtnHandler} />
    </div>
  );
};

export default Card;