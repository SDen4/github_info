import React from 'react';

import { IUsersList } from './types';

const UsersList: React.FC<IUsersList> = (users) => {
  // eslint-disable-next-line no-console
  console.log(users);
  return <div className="list_wrapper">Users List will be here...</div>;
};

export default UsersList;
