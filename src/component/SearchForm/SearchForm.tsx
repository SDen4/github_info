import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { searchSaga } from '../../store/SearchReducer/actions';

import SubmitButton from '../../ui/SubmitButton';

import './styles.css';

const SearchForm: React.FC = () => {
  const [searchLogin, setsearchLogin] = useState<string>('');
  const [disabledBtn, setDisabledBtn] = useState(true);
  const dispatch = useDispatch();

  // auto focus on input
  const ref: any = useRef(null);
  useEffect(() => {
    ref.current.focus();
  }, []);

  const changeTextHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let textValue = event?.target.value;
    setsearchLogin(textValue);

    if (textValue.trim()) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  };

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(searchSaga(searchLogin));
    // eslint-disable-next-line no-console
    console.log(searchLogin);
  };

  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <input
        ref={ref}
        className="input"
        type="text"
        placeholder="Enter the github login"
        value={searchLogin}
        onChange={changeTextHandler}
      />
      <SubmitButton disabled={disabledBtn}>Search</SubmitButton>
    </form>
  );
};

export default SearchForm;
