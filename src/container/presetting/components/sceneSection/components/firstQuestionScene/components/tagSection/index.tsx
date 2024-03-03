import { v4 as uuidv4 } from 'uuid';

import AutocompleteSearch from '@/components/autocompleteSearch';
import { XIcon } from '@/components/icon';
import Tag from '@/components/tag';
import { notify } from '@/components/toast';
import usePresettingDataStore from '@/container/presetting/stores/usePresettingDataStore';

import { MAX_TAG_COUNT } from '../../constants';
import { dummyTags } from '../../dummydata';

const TagSection = () => {
  const {
    firstQuestionTags,
    addFirstQuestionTag,
    removeFirstQuestionTag,
    setFirstQuestion,
  } = usePresettingDataStore();

  return (
    <div className="flex w-[40rem] flex-col gap-[1rem]">
      <div className="flex gap-[0.5rem]">
        <h2 className="text-large font-semibold">카테고리 선택</h2>
        <p className="flex items-end text-extraSmall text-text-60">최대 3개</p>
      </div>
      <div className="h-[4rem] w-full">
        <AutocompleteSearch
          totalDatas={dummyTags}
          selectedList={firstQuestionTags}
          onSelectItem={(tag) => {
            if (firstQuestionTags.length >= MAX_TAG_COUNT) {
              notify('warning', '제한된 태그 개수를 초과하였습니다');
              return;
            }
            addFirstQuestionTag(tag);
          }}
        />
      </div>
      <div className="flex min-h-[2rem] w-full gap-[1rem]">
        {firstQuestionTags.map((tag) => (
          <Tag key={uuidv4()}>
            {tag.name}
            <button
              type="button"
              key={uuidv4()}
              onClick={() => {
                removeFirstQuestionTag(tag);
                setFirstQuestion(undefined);
              }}
            >
              <XIcon className="h-[1.5rem] stroke-white" />
            </button>
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default TagSection;
