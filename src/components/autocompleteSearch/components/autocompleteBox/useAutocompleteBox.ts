import { useEffect } from 'react';

import { useAutocomplete } from '../../contexts';

const useAutocompleteBox = () => {
  const {
    autocompleteList,
    isListVisible,
    keyboardIndex,
    setKeyboardIndex,
    inputValue,
    handleItemClick,
    autoItemRef,
    autoBoxRef,
  } = useAutocomplete();

  useEffect(() => {
    setKeyboardIndex(-1);
  }, [setKeyboardIndex, inputValue, isListVisible]);

  const handleKeywordtHighlight = (name: string) => {
    const value = name.length > 30 ? `${name.slice(0, 30)}...` : name;
    const nameArray = Array.from(value);
    const index = value.toLowerCase().indexOf(inputValue.toLowerCase());

    if (index === -1) {
      return { prevWord: value, keyword: null, postWord: null };
    }

    const prevWord = nameArray.slice(0, index).join('');
    const keyword = nameArray.slice(index, index + inputValue.length).join('');
    const postWord = nameArray.slice(index + inputValue.length).join('');

    return { prevWord, keyword, postWord };
  };

  return {
    autoBoxRef,
    autoItemRef,
    autocompleteList,
    isListVisible,
    keyboardIndex,
    handleKeywordtHighlight,
    handleItemClick,
  };
};

export default useAutocompleteBox;
