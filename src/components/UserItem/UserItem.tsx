import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchSaga } from '../../store/SearchReducer/actionsSagas';

import { IUserItem } from './types';
import { AppStateType } from '../../store/RootReducer';
import { ISearhHistoryItem } from '../../store/SearchReducer/types';

import styles from './UserItem.module.css';

const UserItem: React.FC<IUserItem> = ({ user }) => {
  const dispatch = useDispatch();

  const isMobile = useSelector<AppStateType, boolean>(
    (store) => store.search.isMobile,
  );
  const history = useSelector<AppStateType, ISearhHistoryItem[]>(
    (store) => store.search.searchHistory,
  );

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

export default memo(UserItem);
