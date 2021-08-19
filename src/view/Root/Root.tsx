import React from 'react';

import Input from '../../component/Input';

import './styles.css';

const Root: React.FC = () => {
  return (
    <div className="root_wrapper">
      <header className="root_header">Find github&apos;s user</header>
      <section className="root_section">
        <Input />
      </section>
    </div>
  );
};

export default Root;
