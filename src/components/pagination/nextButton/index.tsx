import { useContext } from 'react';

import { PaginationContext } from '../contexts';
import { IProps } from './types';

const NextButton = ({ ...rest }: IProps) => {
  const { handleMoveNextPage } = useContext(PaginationContext);

  return (
    <button
      type="button"
      onClick={handleMoveNextPage}
      {...rest}
    >
      {'>'}
    </button>
  );
};

export default NextButton;
