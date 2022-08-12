import React, { memo } from 'react';

import classes from './styles.module.css';

interface IProps {
  className?: string;
  props?: any;
  onClick?: () => void;
  style?: React.CSSProperties | undefined;
}

export const Flex: React.FC<IProps> = memo(
  ({ children, className, style, ...props }) => {
    return (
      <div className={`${classes.flex} ${className}`} style={style} {...props}>
        {children}
      </div>
    );
  },
);
