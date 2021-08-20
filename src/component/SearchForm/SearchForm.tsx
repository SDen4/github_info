import React, { useState } from 'react';

import './styles.css';

const SearchForm: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');

  const changeTextHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event?.target.value);
  };

  return (
    <form>
      <input
        className="input"
        type="text"
        placeholder="Enter the github login"
        value={searchText}
        onChange={changeTextHandler}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
