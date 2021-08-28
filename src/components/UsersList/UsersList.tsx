import React from 'react';
import { UserInnerType } from '../../store/SearchReducer/types';
import UserItem from '../UserItem';

import { IUsersList } from './types';

import './styles.css';

const UsersList: React.FC<IUsersList> = ({ users, login, requestType }) => {
  return (
    <div className="list_wrapper">
      {users.length ? (
        <ul className="list_wrapper_ul">
          {users.map((el: UserInnerType) => (
            <li key={el.login}>
              <UserItem user={el} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="list_error">
          <h2>
            It seems the user
            <span className="list_error_login"> {login} </span>
            hasn&#39;t any {requestType}
          </h2>
        </div>
      )}
    </div>
  );
};

export default UsersList;
