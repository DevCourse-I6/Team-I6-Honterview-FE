import { useAutocomplete } from '../../contexts';

const useAutocompleteBox = () => {
  const {
    autocompleteList,
    isListVisible,
    keyboardIndex,
    inputValue,
    handleItemClick,
    autoItemRef,
    autoBoxRef,
  } = useAutocomplete();

  const handleKeywordtHighlight = (name: string) => {
    const value =
      name.length > 30 ? `${name.trim().slice(0, 30)}...` : name.trim();
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
