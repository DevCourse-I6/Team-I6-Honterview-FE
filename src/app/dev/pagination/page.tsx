'use client';

import Pagination from '@/components/pagination';

/**
 * @brief 페이지네이션 컴포넌트
 * @param defaultPage 초기 선택 페이지
 * @param limit 1페이지 기준 데이터 개수
 * @param total 총 데이터 개수
 * @param onPageChange 선택된 페이지 변경 콜백 함수
 */

const PaginationDev = () => {
  const printPageChange = (page: number) => {
    // eslint-disable-next-line no-console
    console.log(page);
  };

  return (
    <Pagination
      defaultPage={5}
      limit={20}
      total={423}
      onPageChange={printPageChange}
    >
      <Pagination.PrevButton />
      <Pagination.PageButtons />
      <Pagination.NextButton />
    </Pagination>
  );
};

export default PaginationDev;
