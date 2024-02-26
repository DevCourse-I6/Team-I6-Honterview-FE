import { useState } from 'react';

import { AutocompleteSearchProps, DataType } from './type';

const useAutoCompleteSearch = ({
  totalDatas,
  limit = totalDatas.length,
  selectedList,
  onSelectItem,
}: AutocompleteSearchProps) => {
  const [isListVisible, setIsListVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [autoCompleteList, setAutoCompleteList] = useState<DataType[]>([]);
  const [isError, setIsError] = useState(false);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    setIsError(false);

    if (!value) {
      setIsListVisible(false);
      return;
    }

    const lowerValue = value.toLowerCase();

    const newList = totalDatas.filter(
      (data) =>
        data.name.toLocaleLowerCase().includes(lowerValue) &&
        !selectedList.includes(data.name),
    );
    setAutoCompleteList(newList);
    setIsListVisible(newList.length > 0);
  };

  const handleSelectItem = (value: string) => {
    setIsError(false);
    setIsListVisible(false);
    if (limit <= selectedList.length) {
      setIsError(true);
      return;
    }
    onSelectItem(value);
    setInputValue('');
  };

  return {
    isError,
    autoCompleteList: autoCompleteList.slice(0, 5),
    inputValue,
    isListVisible,
    setIsListVisible,
    handleChangeInput,
    handleSelectItem,
  };
};

export default useAutoCompleteSearch;
