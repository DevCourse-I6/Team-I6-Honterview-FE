import { useAutocomplete } from '../../contexts';
import { AutocompleteInputProps } from './type';

const useAutocompleteInput = ({
  totalDatas,
  selectedList,
}: AutocompleteInputProps) => {
  const {
    autoBoxRef,
    autoItemRef,
    isListVisible,
    setIsListVisible,
    setInputValue,
    inputValue,
    autocompleteList,
    keyboardIndex,
    setKeyboardIndex,
    setAutocompleteList,
    setIsCreateVisible,
    handleItemClick,
  } = useAutocomplete();

  const handleInputClick = () => {
    if (!inputValue) {
      setAutocompleteList(totalDatas);
    }
    if (autocompleteList.length > 0 || !inputValue) {
      setIsListVisible(true);
    }
    setIsCreateVisible(true);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    setIsCreateVisible(true);

    if (!value) {
      setIsListVisible(false);
      return;
    }

    const lowerValue = value.toLowerCase();

    const newList = totalDatas.filter(
      (data) =>
        data.name.toLocaleLowerCase().includes(lowerValue) &&
        (!selectedList?.length ||
          !selectedList?.filter(({ id }) => {
            return data.id === id;
          }).length),
    );
    setAutocompleteList(newList);
    newList.length > 0 ? setIsListVisible(true) : setIsListVisible(false);
  };

  const handleKeyEvent = (key: string) => {
    if (keyboardIndex === -1 && key === 'ArrowDown') {
      setKeyboardIndex(0);
    }
    if (!isListVisible || !autoBoxRef?.current || !autoItemRef?.current) {
      return;
    }
    switch (key) {
      case 'ArrowUp':
        if (keyboardIndex === 0) {
          setKeyboardIndex(autocompleteList.length - 1);
          autoBoxRef.current.scrollTop = autoBoxRef.current.scrollHeight;
          break;
        }
        setKeyboardIndex(keyboardIndex - 1);

        if (keyboardIndex - 1 < autocompleteList.length - 5) {
          autoBoxRef.current.scrollTop -= autoItemRef.current.scrollHeight;
        }
        break;
      case 'ArrowDown':
        if (keyboardIndex === autocompleteList.length - 1) {
          setKeyboardIndex(0);
          autoBoxRef.current.scrollTop = 0;
          break;
        }

        setKeyboardIndex(keyboardIndex + 1);
        if (keyboardIndex + 1 >= 5) {
          autoBoxRef.current.scrollTop += autoItemRef.current.offsetHeight;
        }

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
    handleKeyEvent,
    handleChangeInput,
    handleInputClick,
    isListVisible,
    inputValue,
    keyboardIndex,
    setKeyboardIndex,
    lastKeyboardIndex: autocompleteList.length - 1,
  };
};

export default useAutocompleteInput;
