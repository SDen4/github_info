import React from 'react';

import { IUserItem } from './types';

import './styles.css';

const UserItem: React.FC<IUserItem> = ({ user }) => {
  return (
    <div className="user_item_wrapper">
      <div className="user_item_photo_wrapper">
        <img src={user.avatar_url} alt="User's avatar" />
      </div>

      <div className="user_info">
        <div className="user_info_unit">
          <h2>{user.login}</h2>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
