import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Card from '../../components/Card';
import Error from '../../components/Error';
import UsersList from '../../components/UsersList';
import SearchForm from '../../components/SearchForm';
import Loader from '../../ui/Loader';

import { AppStateType } from '../../store/RootReducer';

import './styles.css';

const Root: React.FC = () => {
  const storeData = useSelector<AppStateType, any>((store) => store.search);
  const [user, setUser] = useState<string>('');

  const search = (searchLogin: string) => {
    setUser(searchLogin);
  };

  return (
    <div className="root_wrapper">
      <header className="root_header">Find github&apos;s user</header>
      <section className="root_section">
        <SearchForm search={search} />
      </section>

      <section className="root_section">
        {storeData.loading && <Loader />}
        {storeData.cardOpened && <Card user={storeData.user} />}
        {storeData.usersListOpened && <UsersList users={storeData.usersList} />}
        {storeData.error && <Error userName={user} />}
      </section>
    </div>
  );
};

export default Root;
