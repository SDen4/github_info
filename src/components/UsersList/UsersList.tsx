import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import {
  cardOpenedFlag,
  reposOpenedListFlag,
  userListOpenedFlag,
} from '../../store/SearchReducer/actions';

import { UserInnerType } from '../../store/SearchReducer/types';
import UserItem from '../UserItem';

import { IUsersList } from './types';

import styles from './UsersList.module.css';

const UsersList: React.FC<IUsersList> = ({
  users,
  login,
  requestType,
  history,
  isMobile,
  loading,
}) => {
  const dispatch = useDispatch();

  const loginBtnHandler = () => {
    dispatch(userListOpenedFlag(false));
    dispatch(reposOpenedListFlag(false));
    dispatch(cardOpenedFlag(true));
  };

  return (
    <div className={clsx(styles.listWrapper, loading && styles.hide)}>
      {users.length ? (
        <ul className={styles.listWrapperUl}>
          {users.map((el: UserInnerType) => (
            <li key={el.login}>
              <UserItem user={el} history={history} isMobile={isMobile} />
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.listError}>
          <h2>
            It seems the user
            <span className={styles.listErrorLogin}>
              {' '}
              <button
                type="button"
                onClick={loginBtnHandler}
                className={styles.cardLogin}
              >
                {login}
              </button>{' '}
            </span>
            hasn&#39;t any {requestType}
          </h2>
        </div>
      )}
    </div>
  );
};

export default memo(UsersList);
