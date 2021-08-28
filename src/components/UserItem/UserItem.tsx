import React from 'react';
import { useDispatch } from 'react-redux';

import { searchSaga } from '../../store/SearchReducer/actions';

import { IUserItem } from './types';

import './styles.css';

const UserItem: React.FC<IUserItem> = ({ user }) => {
  const dispatch = useDispatch();

  const itemBthHandler = () => {
    dispatch(searchSaga(user.login));
  };

  return (
    <div className="user_item_wrapper">
      <div className="user_item_photo_wrapper">
        <img src={user.avatar_url} alt="User's avatar" />
      </div>

      <div className="user_info">
        <div className="user_info_unit">
          <button type="button" onClick={itemBthHandler}>
            <h2>{user.login}</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
