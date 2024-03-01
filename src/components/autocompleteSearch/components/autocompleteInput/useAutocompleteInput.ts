import useAutocompleteSearchStore from '../../store/useAutocompleteSearchStore';
import { AutocompleteDataType } from '../../type';
import { AutocompleteInputProps } from './type';

const useAutocompleteInput = ({
  totalDatas,
  selectedList,
  onSelectItem,
}: AutocompleteInputProps) => {
  const {
    isListVisible,
    inputValue,
    autoCompleteList,
    keyboardIndex,
    setListVisible,
    setListInVisible,
    setAutoCompleteList,
    setInputValue,
    setKeyboardIndex,
  } = useAutocompleteSearchStore();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);

    if (!value) {
      setListInVisible();
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

    setAutoCompleteList(newList);
    newList.length > 0 ? setListVisible() : setListInVisible();
  };

  const handleSelectItem = (value: AutocompleteDataType) => {
    onSelectItem(value);
    setListInVisible();
    setInputValue('');
  };

  const handleKeyEvent = (key: string) => {
    if (!isListVisible) {
      return;
    }

    switch (key) {
      case 'ArrowUp':
        setKeyboardIndex(
          keyboardIndex <= 0 ? autoCompleteList.length - 1 : keyboardIndex - 1,
        );
        break;
      case 'ArrowDown':
        setKeyboardIndex(
          keyboardIndex === autoCompleteList.length - 1 ? 0 : keyboardIndex + 1,
        );
        break;
      case 'Enter':
        if (keyboardIndex < 0) {
          return;
        }
        handleSelectItem(autoCompleteList[keyboardIndex]);
        break;
      default:
        break;
    }
  };

  const handleInputClick = () => {
    !!autoCompleteList.length && inputValue && setListInVisible();
  };

  return {
    handleChangeInput,
    handleKeyEvent,
    handleInputClick,
    isListVisible,
    inputValue,
    autoCompleteList,
  };
};

export default useAutocompleteInput;
