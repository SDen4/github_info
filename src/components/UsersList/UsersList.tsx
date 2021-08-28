import React from 'react';
import { UserInnerType } from '../../store/SearchReducer/types';
import UserItem from '../UserItem';

import { IUsersList } from './types';

import './styles.css';

const UsersList: React.FC<IUsersList> = ({ users }) => {
  // eslint-disable-next-line no-console
  console.log(users);
  return (
    <div className="list_wrapper">
      <ul className="list_wrapper_ul">
        {users.map((el: UserInnerType) => (
          <li key={el.login}>
            <UserItem user={el} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
