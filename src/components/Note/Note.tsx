import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import {
  favoriteUserFlag,
  fetchFavoriteList,
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
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

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

    const newfavoriteUser = { name: login, note: value };
    dispatch(fetchFavoriteListAdd(newfavoriteUser));
    localStorage.setItem(
      'favorite',
      JSON.stringify([...favorites, newfavoriteUser]),
    );

    dispatch(favoriteUserFlag(true));
    dispatch(setFavoriteBtnFlag(true));
  };

  const onBtnModalHandler = (action: boolean) => {
    if (action) {
      setValue('');

      const newfavoriteUserList = favorites.map((el) => {
        if (el.name === login) {
          return { name: login };
        }
        return el;
      });

      localStorage.setItem('favorite', JSON.stringify(newfavoriteUserList));

      dispatch(noteSave(''));
      dispatch(fetchFavoriteList(newfavoriteUserList));
      dispatch(noteFlag(false));
      dispatch(noteBtnFlag(false));
    } else {
      setIsModalOpened(false);
    }
  };

  return (
    <div className={styles.component}>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <textarea onChange={onChangeHandler} value={value} ref={ref} />
        <div className={styles.btnsWrapper}>
          <button type="button" onClick={onCancelHandler}>
            Cancel
          </button>

          {value && (
            <button
              type="button"
              className={styles.button_delete}
              onClick={() => setIsModalOpened(true)}
            >
              Delete
            </button>
          )}

          <button
            type="submit"
            className={clsx(!value && styles.button_unactive)}
            disabled={!value}
          >
            Save and add to favorites
          </button>
        </div>
      </form>

      {isModalOpened && (
        <div className={styles.noteModal}>
          <span>Are you sure to delete note?</span>
          <div className={styles.btnsModalWrapper}>
            <button type="button" onClick={() => onBtnModalHandler(true)}>
              Delete
            </button>
            <button type="button" onClick={() => onBtnModalHandler(false)}>
              Cansel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;
