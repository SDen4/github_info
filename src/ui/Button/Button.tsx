import React from 'react';

import styles from './styles.module.css';

interface IProps {
  onClick: () => void;
  text: string;
}

const Button = ({ onClick, text }: IProps) => {
  return (
    <button type="button" onClick={onClick} className={styles.rootBtn}>
      {text}
    </button>
  );
};

export default Button;
