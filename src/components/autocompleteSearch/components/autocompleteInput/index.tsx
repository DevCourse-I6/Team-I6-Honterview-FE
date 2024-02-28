import React from 'react';

import { SearchIcon } from '@/components/icon';
import Input from '@/components/input';

import { AutocompleteInputProps } from './type';
import useAutocompleteInput from './useAutocompleteInput';

const AutocompleteInput = ({
  totalDatas,
  selectedList,
  onSelectItem,
}: AutocompleteInputProps) => {
  const {
    handleChangeInput,
    handleKeyEvent,
    handleInputClick,
    isListVisible,
    inputValue,
  } = useAutocompleteInput({
    totalDatas,
    selectedList,
    onSelectItem,
  });

  return (
    <div className="flex items-center">
      <Input
        className="flex h-[3.5rem] w-[40rem] gap-[1rem] pl-[0.5rem] outline-none"
        onKeyDown={(e) => {
          handleKeyEvent(e.key);
        }}
      >
        <div className="autoInput flex w-full gap-[0.5rem] overflow-x-scroll">
          <Input.Text
            className="h-[2rem] text-small"
            onChange={handleChangeInput}
            value={inputValue}
            onClick={handleInputClick}
            placeholder="검색어를 입력하세요"
          />
        </div>
        {!isListVisible && <SearchIcon />}
      </Input>
    </div>
  );
};

export default AutocompleteInput;
