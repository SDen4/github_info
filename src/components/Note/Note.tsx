import React from 'react';

import styles from './Note.module.css';

const Note: React.FC = () => {
  return (
    <div className={styles.component}>
      <form className={styles.form}>
        <textarea />
        <div className={styles.btnsWrapper}>
          <button type="button">Cancel</button>
          <button type="submit" className={styles.button_unactive}>
            Save and add to favorites
          </button>
        </div>
      </form>
    </div>
  );
};

export default Note;
