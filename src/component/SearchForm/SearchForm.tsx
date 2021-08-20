import React, { useState } from 'react';
import Button from '../../ui/Button';

import './styles.css';

const SearchForm: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');

  const changeTextHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event?.target.value);
  };

  const onclickHandler = () => {
    // eslint-disable-next-line no-console
    console.log('click!');
  };

  return (
    <form className="form">
      <input
        className="input"
        type="text"
        placeholder="Enter the github login"
        value={searchText}
        onChange={changeTextHandler}
      />
      <Button onClick={onclickHandler}>Search</Button>
    </form>
  );
};

export default SearchForm;
