import React from 'react';

import './styles.css';

const SearchForm: React.FC = () => {
  return (
    <input className="input" type="text" placeholder="Enter the github login" />
  );
};

export default SearchForm;
