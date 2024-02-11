'use client';

import { useState } from 'react';

import { IProps } from './types';

/**
 * @brief 페이지네이션 컴포넌트
 * @param defaultPage 초기 선택 페이지
 * @param limit 1페이지 기준 데이터 개수
 * @param total 총 데이터 개수
 * @param onPageChange 선택된 페이지 변경 콜백 함수
 */

const Pagination = ({
  defaultPage,
  limit,
  total,
  onPageChange,
  ...rest
}: IProps) => {
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const totalPages = Math.ceil(total / limit);

  const handleSelectPage = (newPage: number) => {
    onPageChange(newPage);
    setCurrentPage(newPage);
  };

  const handleMovePrevPage = () => {
    if (currentPage > 1) {
      handleSelectPage(currentPage - 1);
    }
  };

  const handleMoveNextPage = () => {
    if (currentPage + 1 <= totalPages) {
      handleSelectPage(currentPage + 1);
    }
  };

  const viewPageButtons = Array.from(
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
          className={`w-10 rounded-[50%] p-2 hover:rounded-[50%] hover:bg-[#E6E8EA] ${currentPage === page && 'bg-[#E6E8EA] font-bold'}`}
        >
          {page}
        </button>
      );
    });

  return (
    <div
      className="flex gap-1 text-lg"
      style={{ ...rest.style }}
    >
      <button
        type="button"
        onClick={handleMovePrevPage}
      >
        {'<'}
      </button>
      {viewPageButtons}
      <button
        type="button"
        onClick={handleMoveNextPage}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
