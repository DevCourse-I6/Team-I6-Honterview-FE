import { useEffect } from 'react';

import useAutocompleteSearchStore from '../../store/useAutocompleteSearchStore';
import { AutocompleteDataType } from '../../type';
import { AutocompleteBoxProps } from './type';

const useAutocompleteBox = ({ onSelectItem }: AutocompleteBoxProps) => {
  const {
    autoCompleteList,
    inputValue,
    isListVisible,
    keyboardIndex,
    setListInVisible,
    setInputValue,
    setKeyboardIndex,
  } = useAutocompleteSearchStore();

  useEffect(() => {
    if (!isListVisible) {
      setKeyboardIndex(-1);
    }
  }, [isListVisible, setKeyboardIndex]);

  const handleKeywordtHighlight = (name: string) => {
    const nameArray = Array.from(name);
    const index = name.toLowerCase().indexOf(inputValue.toLowerCase());

    const prevWord = nameArray.slice(0, index);
    const keyword = nameArray.slice(index, index + inputValue.length);
    const postWord = nameArray.slice(index + inputValue.length);

    return { prevWord, keyword, postWord };
  };

  const handleSelectItem = (value: AutocompleteDataType) => {
    onSelectItem(value);
    setInputValue('');
    setListInVisible();
  };

  return {
    autoCompleteList,
    isListVisible,
    keyboardIndex,
    handleSelectItem,
    handleKeywordtHighlight,
  };
};

export default useAutocompleteBox;
