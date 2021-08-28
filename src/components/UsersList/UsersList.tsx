import React from 'react';
import { UserType } from '../../store/SearchReducer/types';

import { IUsersList } from './types';

const UsersList: React.FC<IUsersList> = ({ users }) => {
  // eslint-disable-next-line no-console
  console.log(users);
  return (
    <div className="list_wrapper">
      <ul>
        {users.map((el: UserType) => (
          <li key={el.login}>{el.login}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
