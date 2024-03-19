import { notify } from '@/components/toast';

import { useAutocomplete } from '../../contexts';
import { QUESTION_MIN_LENGTH } from '../constants';

const AutocompleteCreateItem = () => {
  const { inputValue, handleItemClick, isCreateVisible } = useAutocomplete();

  if (!inputValue || !isCreateVisible) {
    return;
  }

  return (
    <button
      type="button"
      className="z-20 flex h-fit min-h-[3rem] w-full items-center border bg-white py-[0.5rem] pl-[0.5rem] hover:bg-slate-100 focus:outline-none"
      onClick={() => {
        if (inputValue.length < QUESTION_MIN_LENGTH) {
          notify(
            'warning',
            `질문은 ${QUESTION_MIN_LENGTH}자 이상이어야 합니다`,
          );
          return;
        }
        handleItemClick({
          id: 'new',
          name: inputValue,
        });
      }}
    >
      <p className="auto-text flex w-fit max-w-[22rem] items-center font-semibold text-primaries-primary">
        {inputValue}
      </p>
      (으)로 질문 생성하기
    </button>
  );
};

export default AutocompleteCreateItem;
