import { useAutocomplete } from '../../contexts';
import { AutocompleteInputProps } from './type';

const useAutocompleteInput = ({
  totalDatas,
  selectedList,
}: AutocompleteInputProps) => {
  const {
    isListVisible,
    setIsListVisible,
    setInputValue,
    inputValue,
    autocompleteList,
    keyboardIndex,
    setKeyboardIndex,
    setAutocompleteList,
    setIsCreateVisible,
  } = useAutocomplete();

  const handleInputClick = () => {
    if (!inputValue) {
      return;
    }
    if (autocompleteList.length > 0) {
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
    setAutocompleteList(newList.slice(0, 5));
    newList.length > 0 ? setIsListVisible(true) : setIsListVisible(false);
  };

  return {
    handleChangeInput,
    handleInputClick,
    isListVisible,
    inputValue,
    keyboardIndex,
    setKeyboardIndex,
  };
};

export default useAutocompleteInput;
