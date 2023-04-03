import type { FC } from 'react';
import React from 'react';

import styles from './styles.module.css';

interface IProps {
  className?: string;
  props?: any;
  style?: React.CSSProperties;
}

export const Ul: FC<IProps> = ({ children, className, style, ...props }) => {
  return (
    <ul className={`${styles.ulWrapper} ${className}`} style={style} {...props}>
      {children}
    </ul>
  );
};

Ul.defaultProps = {
  className: '',
  props: '',
  style: {},
};
