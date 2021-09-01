import React from 'react';
import CloseButton from '../../ui/CloseButton';

import styles from './SearchHistoryModal.module.css';

const SearchHistoryModal: React.FC = () => {
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
        <span>Are you sure to clear all search history?</span>
        <div className={styles.btnsWrapper}>
          <button type="button">Delete</button>
          <button type="button">Cansel</button>
        </div>
        <CloseButton onClick={() => null} />
      </div>
    </div>
  );
};

export default SearchHistoryModal;
