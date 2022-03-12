import React from 'react';
import { useDispatch } from 'react-redux';

import { searchSaga } from '../../store/SearchReducer/actionsSagas';

import { IUserItem } from './types';

import styles from './UserItem.module.css';

const UserItem: React.FC<IUserItem> = ({ user, history, isMobile }) => {
  const dispatch = useDispatch();

  const itemBthHandler = () => {
    dispatch(searchSaga(user.login, history, isMobile));
  };

  return (
    <div className={styles.userItemWrapper}>
      <div className={styles.userItemPhotoWrapper}>
        <img src={user.avatar_url} alt="User's avatar" />
      </div>

      <div className={styles.userInfo}>
        <div className={styles.userInfoUnit}>
          <button type="button" onClick={itemBthHandler}>
            <h2>{user.login}</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
