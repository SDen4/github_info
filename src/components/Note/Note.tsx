import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import {
  favoriteUserFlag,
  fetchFavoriteListAdd,
  noteBtnFlag,
  noteFlag,
  noteSave,
  setFavoriteBtnFlag,
} from '../../store/FavoriteReduser/actions';

import { INote } from './types';

import styles from './Note.module.css';

const Note: React.FC<INote> = ({ login, favorites, note }) => {
  const dispatch = useDispatch();
  const ref: any = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const [value, setValue] = useState<string>(note);

  const onChangeHandler: React.ChangeEventHandler<HTMLTextAreaElement> = (
    event,
  ) => {
    if (!event.target.value.trim()) {
      return;
    }
    setValue(event.target.value);
  };

  const onCancelHandler = () => {
    dispatch(noteFlag(false));
    setValue('');
  };

  const onSubmitHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    dispatch(noteSave(value));
    dispatch(noteFlag(false));
    dispatch(noteBtnFlag(true));
    setValue('');

    dispatch(favoriteUserFlag(true));
    const newfavoriteUser = { name: login, note: value };
    dispatch(fetchFavoriteListAdd(newfavoriteUser));
    localStorage.setItem(
      'favorite',
      JSON.stringify([...favorites, newfavoriteUser]),
    );
    dispatch(setFavoriteBtnFlag(true));
  };

  return (
    <div className={styles.component}>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <textarea onChange={onChangeHandler} value={value} ref={ref} />
        <div className={styles.btnsWrapper}>
          <button type="button" onClick={onCancelHandler}>
            Cancel
          </button>
          <button
            type="submit"
            className={clsx(!value && styles.button_unactive)}
            disabled={!value}
          >
            Save and add to favorites
          </button>
        </div>
      </form>
    </div>
  );
};

export default Note;
