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
  } = useAutocomplete();

  useEffect(() => {
    setKeyboardIndex(-1);
  }, [setKeyboardIndex, inputValue, isListVisible]);

  useEffect(() => {
    if (keyboardIndex > -1) {
      autoItemRef?.current?.focus();
    }
  }, [autoItemRef, keyboardIndex]);

  const handleKeywordtHighlight = (name: string) => {
    const nameArray = Array.from(name);
    const index = name.toLowerCase().indexOf(inputValue.toLowerCase());

    const prevWord = nameArray.slice(0, index);
    const keyword = nameArray.slice(index, index + inputValue.length);
    const postWord = nameArray.slice(index + inputValue.length);

    return { prevWord, keyword, postWord };
  };

  const handleKeyEvent = (key: string) => {
    if (!isListVisible) {
      return;
    }
    switch (key) {
      case 'ArrowUp':
        setKeyboardIndex(
          keyboardIndex <= 0 ? autocompleteList.length - 1 : keyboardIndex - 1,
        );
        break;
      case 'ArrowDown':
        setKeyboardIndex(
          keyboardIndex === autocompleteList.length - 1 ? 0 : keyboardIndex + 1,
        );
        break;
      case 'Enter':
        if (keyboardIndex < 0) {
          return;
        }
        handleItemClick(autocompleteList[keyboardIndex]);
        break;
      default:
        break;
    }
  };

  return {
    autoItemRef,
    autocompleteList,
    isListVisible,
    keyboardIndex,
    handleKeywordtHighlight,
    handleItemClick,
    handleKeyEvent,
  };
};

export default useAutocompleteBox;
