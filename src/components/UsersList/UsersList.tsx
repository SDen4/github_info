import React from 'react';
import { useDispatch } from 'react-redux';

import {
  cardOPenedFlag,
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
}) => {
  const dispatch = useDispatch();

  const loginBtnHandler = () => {
    dispatch(userListOpenedFlag(false));
    dispatch(reposOpenedListFlag(false));
    dispatch(cardOPenedFlag(true));
  };

  return (
    <div className={styles.list_wrapper}>
      {users.length ? (
        <ul className={styles.list_wrapper_ul}>
          {users.map((el: UserInnerType) => (
            <li key={el.login}>
              <UserItem user={el} history={history} />
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.list_error}>
          <h2>
            It seems the user
            <span className={styles.list_error_login}>
              {' '}
              <button
                type="button"
                onClick={loginBtnHandler}
                className={styles.card_login}
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

export default UsersList;
