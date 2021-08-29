import React from 'react';
import { useDispatch } from 'react-redux';

import { searchSaga } from '../../store/SearchReducer/actions';

import { IUserItem } from './types';

import styles from './UserItem.module.css';

const UserItem: React.FC<IUserItem> = ({ user, history }) => {
  const dispatch = useDispatch();

  const itemBthHandler = () => {
    dispatch(searchSaga(user.login, history));
  };

  return (
    <div className={styles.user_item_wrapper}>
      <div className={styles.user_item_photo_wrapper}>
        <img src={user.avatar_url} alt="User's avatar" />
      </div>

      <div className={styles.user_info}>
        <div className={styles.user_info_unit}>
          <button type="button" onClick={itemBthHandler}>
            <h2>{user.login}</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
