import { Search } from '@/components/icon';
import Input from '@/components/input';

import { FilterInputProps } from '../../types';

const FilterInput = ({ searchQuery, setSearchQuery }: FilterInputProps) => {
  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Input className="h-[4rem] w-[20rem] flex-none rounded-[1rem] px-[12px] py-[5px]">
      <Input.Text
        onChange={handleSearchInputChange}
        value={searchQuery}
        placeholder="기술 검색"
        className="text-[1.6rem]"
      />
      <Search className="cursor-pointer text-[#e5e7eb]" />
    </Input>
  );
};

export default FilterInput;
