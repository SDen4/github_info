import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

import { noteFlag } from '../../store/FavoriteReduser/actions';

import styles from './Note.module.css';

const Note: React.FC = () => {
  const dispatch = useDispatch();
  const ref: any = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);

  const [value, setValue] = useState<string>('');

  const onCancelHandler = () => {
    dispatch(noteFlag(false));
  };

  return (
    <div className={styles.component}>
      <form className={styles.form}>
        <textarea
          onChange={(event) => setValue(event.target.value)}
          value={value}
          ref={ref}
        />
        <div className={styles.btnsWrapper}>
          <button type="button" onClick={onCancelHandler}>
            Cancel
          </button>
          <button
            type="submit"
            className={clsx(!value && styles.button_unactive)}
          >
            Save and add to favorites
          </button>
        </div>
      </form>
    </div>
  );
};

export default Note;
