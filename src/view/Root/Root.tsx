import React from 'react';

import SearchForm from '../../component/SearchForm';

import './styles.css';

const Root: React.FC = () => {
  return (
    <div className="root_wrapper">
      <header className="root_header">Find github&apos;s user</header>
      <section className="root_section">
        <SearchForm />
      </section>
    </div>
  );
};

export default Root;
