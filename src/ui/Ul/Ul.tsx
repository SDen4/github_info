import React, { memo } from 'react';

import styles from './styles.module.css';

interface IProps {
  className?: string;
  props?: any;
  onClick?: () => void;
  style?: React.CSSProperties | undefined;
}

export const Ul: React.FC<IProps> = memo(
  ({ children, className, style, ...props }) => {
    return (
      <ul
        className={`${styles.ulWrapper} ${className}`}
        style={style}
        {...props}
      >
        {children}
      </ul>
    );
  },
);
