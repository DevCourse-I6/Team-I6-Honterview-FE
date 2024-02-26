'use client';

import './style/style.css';

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Input from '@/components/input';
import useClickAway from '@/hooks/useClickAway';

import { AutocompleteSearch } from '../icon';
import { AutocompleteSearchProps } from './type';
import useAutoCompleteSearch from './useAutoCompleteSearch';

const AutoCompleteSearch = ({
  totalDatas,
  selectedList,
  limit = totalDatas.length,
  onSelectItem,
}: AutocompleteSearchProps) => {
  const {
    isError,
    autoCompleteList,
    inputValue,
    isListVisible,
    setIsListVisible,
    handleChangeInput,
    handleSelectItem,
  } = useAutoCompleteSearch({ totalDatas, limit, selectedList, onSelectItem });

  const ref = useClickAway(() => setIsListVisible(false));
  const [keyboardIndex, setKeyboardIndex] = useState(-1);

  useEffect(() => {
    if (!isListVisible) {
      setKeyboardIndex(-1);
    }
  }, [isListVisible, keyboardIndex]);

  const handleInputHighlight = (name: string) => {
    const nameArray = Array.from(name);
    const index = name.toLowerCase().indexOf(inputValue.toLowerCase());

    const prevWord = nameArray.slice(0, index);
    const keyword = nameArray.slice(index, index + inputValue.length);
    const postWord = nameArray.slice(index + inputValue.length);

    return { prevWord, keyword, postWord };
  };

  const handleKeyEvent = (key: string) => {
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
        handleSelectItem(autoCompleteList[keyboardIndex].name);
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col">
      <div className="block min-h-[2rem] text-extraSmall text-red-600">
        {isError ? '제한 개수를 초과했습니다' : ''}
      </div>
      <div
        className="flex flex-col"
        ref={ref}
      >
        <div className="flex items-center">
          <Input
            className="flex h-[3.5rem] w-[40rem] gap-[1rem] pl-[0.5rem] outline-none"
            onKeyDown={(e) => {
              if (!isListVisible) {
                return;
              }
              handleKeyEvent(e.key);
            }}
          >
            <div className="autoInput flex w-full gap-[0.5rem] overflow-x-scroll">
              <Input.Text
                className="h-[2rem] text-small"
                onChange={handleChangeInput}
                value={inputValue}
                onClick={() =>
                  !!autoCompleteList.length &&
                  inputValue &&
                  setIsListVisible(true)
                }
                placeholder="검색어를 입력하세요"
              />
            </div>
            {!isListVisible && <AutocompleteSearch />}
          </Input>
        </div>
        {isListVisible && (
          <div className="relative">
            <ul className="autobox scroll absolute left-0 top-0 z-10 h-fit max-h-[15.5rem] w-full overflow-scroll border bg-text-20">
              {autoCompleteList.map(({ name }, index) => {
                const { prevWord, keyword, postWord } =
                  handleInputHighlight(name);

                return (
                  <button
                    type="button"
                    className={`flex h-[3rem] w-full items-center pl-[0.5rem] hover:bg-slate-100 ${keyboardIndex === index && 'bg-slate-100'}`}
                    key={uuidv4()}
                    onClick={() => handleSelectItem(name)}
                  >
                    <span className="whitespace-pre">{prevWord}</span>
                    <span className="whitespace-pre font-bold text-primaries-primary">
                      {keyword}
                    </span>
                    {postWord}
                  </button>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoCompleteSearch;
