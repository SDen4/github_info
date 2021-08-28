import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../../components/Card';
import Error from '../../components/Error';
import UsersList from '../../components/UsersList';
import SearchForm from '../../components/SearchForm';
import Loader from '../../ui/Loader';

import { AppStateType } from '../../store/RootReducer';
import {
  cardOPenedFlag,
  userListOpenedFlag,
} from '../../store/SearchReducer/actions';

import './styles.css';
import clsx from 'clsx';
import { InitialStateType } from '../../store/SearchReducer/types';

const Root: React.FC = () => {
  const dispatch = useDispatch();
  const storeData = useSelector<AppStateType, InitialStateType>(
    (store) => store.search,
  );
  const [user, setUser] = useState<string>('');

  const search = (searchLogin: string) => {
    setUser(searchLogin);
  };

  const backBtnHandler = () => {
    dispatch(userListOpenedFlag(false));
    dispatch(cardOPenedFlag(true));
  };

  return (
    <div className="root_wrapper">
      <header className="root_header">Find github&apos;s user</header>
      <section className={clsx('root_section', 'root_section_search')}>
        <SearchForm search={search} />

        {storeData.usersListOpened && (
          <button type="button" onClick={backBtnHandler} className="root_btn">
            Back
          </button>
        )}
      </section>

      <section className="root_section">
        {storeData.loading && <Loader />}
        {storeData.cardOpened && <Card user={storeData.user} />}
        {storeData.usersListOpened && (
          <UsersList
            users={storeData.usersList}
            login={storeData.user.login}
            requestType={storeData.lastRequestType}
          />
        )}
        {storeData.error && <Error userName={user} />}
      </section>
    </div>
  );
};

export default Root;
