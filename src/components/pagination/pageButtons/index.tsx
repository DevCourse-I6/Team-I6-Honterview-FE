import { useContext } from 'react';

import { PaginationContext } from '../contexts';
import { IProps } from './types';

const PageButtons = ({ ...rest }: IProps) => {
  const { createPageButtons } = useContext(PaginationContext);

  return <>{createPageButtons(rest.className)}</>;
};

export default PageButtons;
