import React, { useState, useRef, useEffect } from 'react';
import SubmitButton from '../../ui/SubmitButton';

import './styles.css';

const SearchForm: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [disabledBtn, setDisabledBtn] = useState(true);

  // auto focus on input
  const ref: any = useRef(null);
  useEffect(() => {
    ref.current.focus();
  }, []);

  const changeTextHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let textValue = event?.target.value;
    setSearchText(textValue);

    if (textValue.trim()) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  };

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(searchText);
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <input
        ref={ref}
        className="input"
        type="text"
        placeholder="Enter the github login"
        value={searchText}
        onChange={changeTextHandler}
      />
      <SubmitButton disabled={disabledBtn}>Search</SubmitButton>
    </form>
  );
};

export default SearchForm;
