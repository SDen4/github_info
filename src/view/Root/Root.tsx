import React from 'react';
import Card from '../../components/Card';

import SearchForm from '../../components/SearchForm';

import './styles.css';

const Root: React.FC = () => {
  return (
    <div className="root_wrapper">
      <header className="root_header">Find github&apos;s user</header>
      <section className="root_section">
        <SearchForm />
      </section>

      <section className="root_section">
        <Card />
      </section>
    </div>
  );
};

export default Root;
