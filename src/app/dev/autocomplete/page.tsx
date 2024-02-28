'use client';

import AutocompleteSearch from '@/components/autocompleteSearch';
import { dummyTags } from '@/container/presetting/components/sceneSection/components/firstQuestionScene/dummydata';

// 아이템이 선택되면 콘솔에 해당 이름이 찍힙니다
const AutoCompletePage = () => {
  return (
    <div className="wrap flex flex-col items-center justify-center">
      검색해보세요!
      <p>
        Java | JavaScript | TypeScript | React | Spring | AWS | 프론트엔드 |
        백엔드 | 네트워크 | 운영체제
      </p>
      <AutocompleteSearch
        totalDatas={dummyTags}
        onSelectItem={() => {}}
      />
    </div>
  );
};

export default AutoCompletePage;
