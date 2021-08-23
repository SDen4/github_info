import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../../components/Card';
import SearchForm from '../../components/SearchForm';

import { AppStateType } from '../../store/RootReducer';
// import { SearchReducer } from '../../store/SearchReducer/SearchReducer';

import './styles.css';

const Root: React.FC = () => {
  const storeData = useSelector<AppStateType, any>((store) => store.search);

  return (
    <div className="root_wrapper">
      <header className="root_header">Find github&apos;s user</header>
      <section className="root_section">
        <SearchForm />
      </section>

      <section className="root_section">
        {storeData.cardOpened && <Card user={storeData.user} />}
      </section>
    </div>
  );
};

export default Root;
