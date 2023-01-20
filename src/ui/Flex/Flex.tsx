import React, { HTMLAttributes } from 'react';

import classes from './styles.module.css';

export const Flex: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  style,
  ...props
}) => {
  return (
    <div className={`${classes.flex} ${className}`} style={style} {...props}>
      {children}
    </div>
  );
};
