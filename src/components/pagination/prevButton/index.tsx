import { useContext } from 'react';

import { PaginationContext } from '../contexts';
import { IProps } from './types';

const PrevButton = ({ ...rest }: IProps) => {
  const { handleMovePrevPage } = useContext(PaginationContext);

  return (
    <button
      type="button"
      onClick={handleMovePrevPage}
      {...rest}
    >
      {'<'}
    </button>
  );
};

export default PrevButton;
