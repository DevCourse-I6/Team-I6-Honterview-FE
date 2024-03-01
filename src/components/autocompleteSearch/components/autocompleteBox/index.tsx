import { v4 as uuid } from 'uuid';

import { AutocompleteBoxProps } from './type';
import useAutocompleteBox from './useAutocompleteBox';

const AutocompleteBox = ({ onSelectItem }: AutocompleteBoxProps) => {
  const {
    isListVisible,
    autoCompleteList,
    keyboardIndex,
    handleKeywordtHighlight,
    handleSelectItem,
  } = useAutocompleteBox({
    onSelectItem,
  });

  if (!isListVisible) {
    return;
  }

  return (
    <div className="relative">
      <ul className="autobox scroll absolute left-0 top-0 z-10 h-fit max-h-[15.5rem] w-full overflow-scroll border bg-text-20">
        {autoCompleteList.map((value, index) => {
          const { prevWord, keyword, postWord } = handleKeywordtHighlight(
            value.name,
          );

          return (
            <button
              type="button"
              className={`flex h-[3rem] w-full items-center pl-[0.5rem] hover:bg-slate-100 ${keyboardIndex === index && 'bg-slate-100'}`}
              key={uuid()}
              onClick={() => handleSelectItem(value)}
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
  );
};

export default AutocompleteBox;
