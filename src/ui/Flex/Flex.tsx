import React, { memo } from 'react';

import styles from './styles.module.css';

interface IProps {
  className?: string;
  props?: any;
  onClick?: () => void;
}

export const Flex: React.FC<IProps> = memo(
  ({ children, className, ...props }) => {
    return (
      <div className={`${styles.flex} ${className}`} {...props}>
        {children}
      </div>
    );
  },
);
