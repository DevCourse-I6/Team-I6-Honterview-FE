import { v4 as uuid } from 'uuid';

import useAutocompleteBox from './useAutocompleteBox';

const AutocompleteBox = () => {
  const {
    autoItemRef,
    isListVisible,
    autocompleteList,
    keyboardIndex,
    handleKeywordtHighlight,
    handleItemClick,
    handleKeyEvent,
  } = useAutocompleteBox();

  if (!isListVisible) {
    return;
  }

  return (
    <div className="relative">
      <div className="autobox scroll absolute left-0 top-0 z-10 h-fit max-h-[15rem] w-full overflow-scroll border border-t-0 bg-text-20">
        {autocompleteList.map((value, index) => {
          const { prevWord, keyword, postWord } = handleKeywordtHighlight(
            value.name,
          );

          return (
            <button
              ref={index === keyboardIndex ? autoItemRef : null}
              type="button"
              className={`flex h-[3rem] w-full items-center pl-[0.5rem] hover:bg-slate-100 focus:outline-none ${keyboardIndex === index && 'bg-slate-100'}`}
              key={uuid()}
              onClick={() => handleItemClick(value)}
              onKeyDown={(e) => {
                handleKeyEvent(e.key);
              }}
            >
              <span className="whitespace-pre">{prevWord}</span>
              <span className="whitespace-pre font-bold text-primaries-primary">
                {keyword}
              </span>
              {postWord}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AutocompleteBox;
