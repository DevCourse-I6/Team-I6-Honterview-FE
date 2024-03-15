import { SearchIcon } from '@/components/icon';
import Input from '@/components/input';

import { AutocompleteInputProps } from './type';
import useAutocompleteInput from './useAutocompleteInput';

const AutocompleteInput = ({
  totalDatas,
  selectedList,
  placeholder,
}: AutocompleteInputProps) => {
  const {
    handleChangeInput,
    handleInputClick,
    isListVisible,
    inputValue,
    setKeyboardIndex,
    keyboardIndex,
  } = useAutocompleteInput({
    totalDatas,
    selectedList,
  });

  return (
    <div className="flex items-center">
      <Input
        className="flex h-[3.5rem] w-full gap-[1rem] pl-[0.5rem] outline-none"
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown' && !e.nativeEvent.isComposing) {
            setKeyboardIndex(keyboardIndex + 1);
          }
        }}
      >
        <div className="autoInput flex w-full gap-[0.5rem] overflow-x-scroll">
          <Input.Text
            className="h-[2rem] text-small"
            onChange={handleChangeInput}
            value={inputValue}
            onClick={handleInputClick}
            placeholder={placeholder ?? '검색어를 입력하세요'}
          />
        </div>
        {!isListVisible && <SearchIcon />}
      </Input>
    </div>
  );
};

export default AutocompleteInput;
