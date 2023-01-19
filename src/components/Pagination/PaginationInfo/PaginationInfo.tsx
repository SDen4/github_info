import React, { FC } from 'react';

import styles from './styles.module.css';

interface IProps {
  totalElements: number | null;
  page: number;
  itemsPerPage: number;
}

export const PaginationInfo: FC<IProps> = (props) => {
  const { totalElements, page, itemsPerPage } = props;

  const start = 1 + itemsPerPage * (page - 1);
  const preEnd = start + itemsPerPage - 1;
  const end = preEnd > totalElements! ? totalElements : preEnd;

  return (
    <div className={styles.paginationInfo}>
      {start} - {end} from {totalElements}
    </div>
  );
};
