import React from 'react';

import './styles.css';

const Loader: React.FC = () => {
  return (
    <div className="loader_wrapper">
      <div className="lds-default">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
