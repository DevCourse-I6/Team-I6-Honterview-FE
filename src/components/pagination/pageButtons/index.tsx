/* eslint-disable react/jsx-no-useless-fragment */
import { useContext } from 'react';

import { PaginationContext } from '../contexts';
import { IProps } from './types';

const PageButtons = ({ ...rest }: IProps) => {
  const { currentPage, totalPages, handleSelectPage } =
    useContext(PaginationContext);

  const renderPageButtons = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  )
    .filter((page) => {
      const minPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
      const maxPage = minPage + 9;

      return page >= minPage && page <= maxPage;
    })
    .map((page) => {
      return (
        <button
          type="button"
          key={page}
          onClick={() => handleSelectPage(page)}
          className={`w-10 rounded-[50%] p-2 hover:rounded-[50%] hover:bg-[#E6E8EA] ${currentPage === page && 'bg-[#E6E8EA] font-bold'} ${rest.className}`}
        >
          {page}
        </button>
      );
    });

  return <>{renderPageButtons}</>;
};

export default PageButtons;
